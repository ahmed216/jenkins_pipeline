import { Routes, RouterModule } from '@angular/router';
import { FeatureListComponent } from './features/feature-list/feature-list.component';
import { FeatureComponent } from './features/feature/feature.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/index';
import { LoginComponent } from './login/index';

const appRoutes: Routes = [
    { path: 'signin', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    // { path: 'app', component: HomeComponent, canActivate: [AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
