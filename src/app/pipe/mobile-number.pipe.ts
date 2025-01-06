import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobileNumber'
})
export class MobileNumberPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    // Remove non-digit characters
    value = value.replace(/\D/g, '');

    // Format if exactly 10 digits
    if (value.length === 10) {
      return value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    }

    return value;
  }
}
