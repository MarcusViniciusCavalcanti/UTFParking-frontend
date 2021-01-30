import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ModeSystem } from '../../core/data/mode-system.enum';
import { AuthService } from '../../core/service/auth/auth.service';
import { ConfigurationService } from '../../core/service/configuration/configuration.service';
import { TopicConfiguration } from '../../core/service/configuration/topic-configuration';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  ModeSystem = ModeSystem;
  public modeSystem: string;

  modeConfigurationSystem: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private configurationService: ConfigurationService) {
    const topicConfiguration = new TopicConfiguration(authService, configurationService);
  
    topicConfiguration.connect();
    topicConfiguration.message.asObservable().subscribe(message => this.modeSystem = message);
  }

  ngOnInit(): void {
    this.modeConfigurationSystem = this.formBuilder.group({
      mode: new FormControl(this.ModeSystem)
    });
  
    this.modeConfigurationSystem.get('mode').valueChanges.subscribe(value => this.submitChange(value));
  }
  
  mode(mode: ModeSystem) {
    return this.modeSystem === mode;
  }
  
  private submitChange(value) {
    if (value === ModeSystem.AUTOMATIC) {
      this.configurationService.updateModeSystem('AUTOMATIC').subscribe(config => {});
    }

    if (value === ModeSystem.MANUAL) {
      this.configurationService.updateModeSystem('MANUAL').subscribe(config => {});
    }

    if (value === ModeSystem.NONE) {
      this.configurationService.updateModeSystem('NONE').subscribe(config => {});
    }
  }
}
