import {
  Component, Input, Output, ChangeDetectionStrategy, EventEmitter, ChangeDetectorRef
} from '@angular/core';
import { DemoCdDefaultComponent } from './demo-cd-default.component';

@Component({
  selector: 'demo-cd-on-push',
  templateUrl: './demo-cd-on-push.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.demo-component]': 'true'
  }
})
export class DemoCdOnPushComponent extends DemoCdDefaultComponent { }
