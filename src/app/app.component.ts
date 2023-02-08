import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public currentView: string = 'default';
  public currentViewOptions: string[] = ['default', 'on-push', 'detached-on-push'];

  // Change it to increase/decrease the number of children
  public leftBranchDepth: number = 4;
  public rightBranchDepth: number = 2;

  constructor(private cdRef: ChangeDetectorRef) { }

  public changeCurrentView(currentView: string): void {
    if (this.currentView !== currentView && currentView === 'detached-on-push') {
      this.cdRef.detach();
    }
    if (this.currentView !== currentView && currentView !== 'detached-on-push') {
      this.cdRef.reattach();
    }

    this.currentView = currentView;
    this.triggerChangeIfNeeded();
  }

  public triggerChangeIfNeeded(): void {
    if (this.currentView === 'detached-on-push') {
      this.cdRef.detectChanges();      
    }
  }
}
