export enum ModeSystem {
  AUTOMATIC = 'Automático',
  MANUAL = 'Manual',
  NONE = 'Desativado',
  UNDEFINED = '',
}

export function getEnumName(name: string) {
  if (name === 'AUTOMATIC'){
    return ModeSystem.AUTOMATIC;
  }

  if (name === 'MANUAL') {
    return ModeSystem.MANUAL;
  }

  if (name === 'NONE') {
    return ModeSystem.NONE
  }

  return ModeSystem.UNDEFINED;
}

export function getEnumByValue(value: string) {
  if (value === ModeSystem.MANUAL) {
    return 'MANUAL';
  }

  if (value === ModeSystem.AUTOMATIC) {
    return 'AUTOMATIC';
  }

  return 'NONE'
}
