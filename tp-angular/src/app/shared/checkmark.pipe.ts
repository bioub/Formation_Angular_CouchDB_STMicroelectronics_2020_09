import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkmark',
})
export class CheckmarkPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? '✓' : '✗';
  }
}
