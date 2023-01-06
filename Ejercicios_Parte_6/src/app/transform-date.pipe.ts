import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformDate'
})

// transformar fecha a :
// 1 a 59 minutos => min ago
// 1 a 23 horas => hrs ago
// 1 a 9 dias => days ago
// de 10 a mas dias => dia y mes

export class TransformDatePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    if (value) {
      const date = new Date(value);
      const now = new Date();
      const diff = now.getTime() - date.getTime();
      const minutes = Math.floor(diff / 60000);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      if (minutes < 60) {
        return minutes + ' min ago';
      } else if (hours < 24) {
        return hours + ' hrs ago';
      } else if (days < 10) {
        return days + ' days ago';
      } else {
        return date.toLocaleDateString('es-ES', { day: '2-digit', month: 'short' });
      }
    }
  }
}
