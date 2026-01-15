import { Component } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { KENDO_GRID } from "@progress/kendo-angular-grid";
import { KENDO_PAGER } from "@progress/kendo-angular-pager";
import { patients, Patient } from "./healthcare/patients";

@Component({
  selector: "my-app",
  imports: [FormsModule, KENDO_GRID, KENDO_PAGER],
  template: `
    <kendo-grid
      [kendoGridBinding]="gridView"
      [pageable]="true"
      [pageSize]="pageSize"
      [height]="500"
    >
      <kendo-grid-column field="patientId" title="ID" [width]="70">
      </kendo-grid-column
      ><kendo-grid-column field="fullName" title="Patient Name" [width]="180">
        <ng-template kendoGridCellTemplate let-dataItem>
          {{ dataItem.fullName }} (Age: {{ dataItem.age }})
        </ng-template>
      </kendo-grid-column>
      <kendo-grid-column
        field="lastVisitDate"
        title="Last Visit"
        [width]="90"
        format="dd MMM yyyy"
      >
      </kendo-grid-column>
      <kendo-grid-column
        field="primaryDiagnosis"
        title="Diagnosis"
        [width]="180"
      ></kendo-grid-column>
      <kendo-grid-column
        field="riskLevel"
        title="Risk Level"
        [width]="100"
      ></kendo-grid-column>
      <kendo-grid-column
        field="totalCharges"
        title="Charges"
        [width]="100"
        format="c"
      >
      </kendo-grid-column>
      <ng-template kendoPagerTemplate let-totalRows="total">
        <span>total: {{ totalRows }}</span>
      </ng-template>
    </kendo-grid>
  `,
})
export class AppComponent {
  public gridView: Patient[] = patients;
  public pageSize = 65;
  public buttonCount = 2;
  public sizes = [10, 20, 50];
}
