import { Component, OnInit } from '@angular/core';
import { ModeSystem } from '../../core/data/mode-system.enum';
import { AuthService } from '../../core/service/auth/auth.service';
import { ConfigurationService } from '../../core/service/configuration/configuration.service';
import { TopicConfiguration } from '../../core/service/configuration/topic-configuration';

@Component({
  selector: 'app-mode-system',
  templateUrl: './mode-system.component.html',
  styleUrls: ['./mode-system.component.scss']
})
export class ModeSystemComponent implements OnInit {

  public modeSystem: string;
  ModeSystem = ModeSystem;

  constructor( private authService: AuthService,
               private configurationService: ConfigurationService) {
    const topicConfiguration = new TopicConfiguration(authService, configurationService);

    topicConfiguration.connect();
    topicConfiguration.message.asObservable().subscribe(message => this.modeSystem = message);
  }

  ngOnInit(): void {
  }
  
  mode(mode: ModeSystem) {
    return this.modeSystem === mode;
  }
}
