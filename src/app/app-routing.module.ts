import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutDefaultModule } from './theme/desktop/layouts/default/layout-default.module';
import { LayoutDefaultComponent } from './theme/desktop/layouts/default/layout-default.component';
import { PrivateRouteGuard } from './guards/private-route.guard';
import { GuestRouteGuard } from './guards/guest-route.guard';

import { RouteNames } from './route-names';

export const routes: Routes = [
  {
    path: RouteNames.login,
    loadChildren: () => import('./pages/login/login.module').then(mod => mod.LoginModule),
    canActivate: [GuestRouteGuard]
  },
  {
    path: RouteNames.signup,
    loadChildren: () => import('./pages/sign-up/sign-up.module').then(mod => mod.SignUpModule),
    canActivate: [GuestRouteGuard]
  },
  {
    path: RouteNames.resetPassword,
    loadChildren: () => import('./pages/reset-password/reset-password.module').then(mod => mod.ResetPasswordModule),
    canActivate: [GuestRouteGuard]
  },
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule),
        canActivate: [PrivateRouteGuard]
      },
      {
        path: RouteNames.onboarding,
        loadChildren: () => import('./pages/onboarding/onboarding.module').then(mod => mod.OnBoardingModule),
        canActivate: [PrivateRouteGuard]
      },
      {
        path: RouteNames.notifications,
        loadChildren: () => import('./pages/notifications/notifications.module').then(mod => mod.NotificationsModule),
        canActivate: [PrivateRouteGuard]
      },
      {
        path: RouteNames.account,
        loadChildren: () => import('./pages/account/account.module').then(mod => mod.AccountModule),
        canActivate: [PrivateRouteGuard]
      },
      {
        path: RouteNames.teachers,
        loadChildren: () => import('./pages/teachers/teachers.module').then(mod => mod.TeachersModule)
      },
      {
        path: RouteNames.student,
        loadChildren: () => import('./pages/student/student.module').then(mod => mod.StudentModule)
      },
      {
        path: RouteNames.teacher,
        loadChildren: () => import('./pages/teacher/teacher.module').then(mod => mod.TeacherModule)
      },
      {
        path: RouteNames.poses,
        loadChildren: () => import('./pages/poses/poses.module').then(mod => mod.PosesModule)
      },
      {
        path: RouteNames.notFound,
        loadChildren: () =>
          import('./pages/route-not-found/route-not-found.module').then(mod => mod.RouteNotFoundModule)
      },
      {
        path: '**',
        redirectTo: RouteNames.notFound
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled'
    }),
    FlexLayoutModule,
    LayoutDefaultModule
  ],
  exports: [RouterModule],
  declarations: [
    
  ]
})
export class AppRoutingModule { }
