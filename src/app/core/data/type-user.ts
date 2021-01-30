export class TypeUser {
  name: string;
  translateName: string;
  
  static translanter(type) {
    if (type) {
      switch (type) {
        case 'STUDENTS':
          return 'Estudante';
        case 'SPEAKER':
          return 'Palestrante';
        case 'SERVICE':
          return 'Servidor';
        default:
          return 'Não Informado'
      }
    }
  }
}
