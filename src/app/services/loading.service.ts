import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading = new BehaviorSubject<boolean>(false);

  // Méthode pour activer le loader
  show() {
    this.isLoading.next(true);
  }

  // Méthode pour désactiver le loader
  hide() {
    this.isLoading.next(false);
  }
}
