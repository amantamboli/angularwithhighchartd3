import { Routes } from '@angular/router';
import { StudentComponent } from './Mycomponents/student/student.component';
import { EmployeeComponent } from './Mycomponents/employee/employee.component';
import { BarComponent } from './Mycomponents/employee/bar/bar.component';
import { PieComponent } from './Mycomponents/employee/pie/pie.component';
import { AreaComponent } from './Mycomponents/employee/area/area.component';
import { LineComponent } from './Mycomponents/employee/line/line.component';
import { DoubleLineComponent } from './Mycomponents/employee/double-line/double-line.component';
import { LineComponent as D3LineComponent }   from './Mycomponents/student/line/line.component';
import { BarChartComponent } from './Mycomponents/student/bar/bar.component';
import { PieComponent as D3PieComponent } from './Mycomponents/student/pie/pie.component';
import { AreaComponent as D3AreaComponent} from './Mycomponents/student/area/area.component';
export const routes: Routes = [
    {
        path:'d3', 
        component:StudentComponent,
        children:[
            {
                path:'line',
                component: D3LineComponent
            },
            {
                path:'bar',
                component: BarChartComponent
            },
            {
                path:'pie',
                component: D3PieComponent
            },
            {
                path:'area',
                component: D3AreaComponent
            },

        ]

    },
    {
        path:'highchart',
         component:EmployeeComponent,
         children:[
            {
                path:'bar',
                component:BarComponent,
            },
            {
                path:'area',
                component:AreaComponent,
            },
            {
                path:'line',
                component:LineComponent,
            },
            {
                path:'pie',
                component:PieComponent,
            },
            {
                path:'doubleline',
                component:DoubleLineComponent,
            },
        ]
        }
];


// https://stackoverflow.com/questions/45811415/how-to-route-to-the-child-components-in-angular2