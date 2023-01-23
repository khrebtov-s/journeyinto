import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '@src/environments/environment';

@Injectable()
export class ApiMockInterceptor implements HttpInterceptor {
  // Api base url
  protected BASE_URL = `${environment.apiUrl}/${environment.apiVersion}`;

  /**
   * Create mock response based on request data
   */
  protected createResponse(req) {
    const { url, method, body } = req;

    // Authentication
    // if (url === this.BASE_URL + '/rest-auth/login/' && method === 'POST') {
    //   return {
    //     status: 200,
    //     body: {
    //       access: 'jwtsecretAccessToken',
    //       refresh: 'jwtsecretRefreshToken'
    //     }
    //   };
    // }

    // Sign up
    // if (url === this.BASE_URL + '/rest-auth/registration/' && method === 'POST') {
    //   return {
    //     status: 200,
    //     body: {
    //       token: {
    //         access: 'jwtsecretAccessToken',
    //         refresh: 'jwtsecretRefreshToken'
    //       },
    //       user: {
    //         pk: 3,
    //         username: 'test@test.com',
    //         email: 'test@test.com',
    //         first_name: 'John',
    //         last_name: 'doe',
    //         view_status: body.view_status,
    //         telephone: null
    //       }
    //     }
    //   };
    // }

    // Forgotten password reset
    if (url === this.BASE_URL + '/rest-auth/password/reset/' && method === 'POST') {
      return {
        status: 200,
        body: {
          status: 'ok'
        }
      };
    }

    // Get current user by jwt token
    // if (url === this.BASE_URL + '/users/profile/' && method === 'GET') {
    //   return {
    //     status: 200,
    //     body: {
    //       id: 3,
    //       username: 'test@test.com',
    //       email: 'test@test.com',
    //       first_name: 'John',
    //       last_name: 'doe',
    //       view_status: 'teacher',
    //       telephone: null,
    //       // teachers: {
    //       //   connected: [
    //       //     {
    //       //       id: 2,
    //       //       title: 'Madeline Hart',
    //       //       description:
    //       //         'Nisi nec rhoncus ultrices, ligula urna efficitur libero, a luctus tortor justo vitae tellus.',
    //       //       image_id: '1',
    //       //       image_url: '/assets/img/Madeline Hart.png',
    //       //       vimeo_url: '/assets/img/video.png',
    //       //       style: 'Nisi nec rhoncus ultrices, ligula urna efficitur libero, a luctus tortor justo vitae tellus.',
    //       //       city: 'London',
    //       //       qualifications: 'Diploma in Thai Yoga',
    //       //       created_at: '',
    //       //       created_by: '',
    //       //       updated_at: '',
    //       //       telephone: '07979 4671314',
    //       //       email: 'j.hart@hrt.com'
    //       //     }
    //       //   ],
    //       //   subscribed: [
    //       //     {
    //       //       id: 2,
    //       //       title: 'Madeline Hart',
    //       //       description:
    //       //         'Nisi nec rhoncus ultrices, ligula urna efficitur libero, a luctus tortor justo vitae tellus.',
    //       //       image_id: '1',
    //       //       image_url: '/assets/img/Madeline Hart.png',
    //       //       vimeo_url: '/assets/img/video.png',
    //       //       style: 'Nisi nec rhoncus ultrices, ligula urna efficitur libero, a luctus tortor justo vitae tellus.',
    //       //       city: 'London',
    //       //       qualifications: 'Diploma in Thai Yoga',
    //       //       created_at: '',
    //       //       created_by: '',
    //       //       updated_at: '',
    //       //       telephone: '07979 4671314',
    //       //       email: 'j.hart@hrt.com'
    //       //     }
    //       //   ]
    //       // },
    //       // students: {
    //       //   connected: [
    //       //     {
    //       //       id: 2,
    //       //       title: 'Madeline Hart',
    //       //       description:
    //       //         'Nisi nec rhoncus ultrices, ligula urna efficitur libero, a luctus tortor justo vitae tellus.',
    //       //       image_id: '1',
    //       //       image_url: '/assets/img/Madeline Hart.png',
    //       //       vimeo_url: '/assets/img/video.png',
    //       //       style: 'Nisi nec rhoncus ultrices, ligula urna efficitur libero, a luctus tortor justo vitae tellus.',
    //       //       city: 'London',
    //       //       qualifications: 'Diploma in Thai Yoga',
    //       //       created_at: '',
    //       //       created_by: '',
    //       //       updated_at: '',
    //       //       telephone: '07979 4671314',
    //       //       email: 'j.hart@hrt.com'
    //       //     }
    //       //   ],
    //       //   subscribed: [
    //       //     {
    //       //       id: 2,
    //       //       title: 'Madeline Hart',
    //       //       description:
    //       //         'Nisi nec rhoncus ultrices, ligula urna efficitur libero, a luctus tortor justo vitae tellus.',
    //       //       image_id: '1',
    //       //       image_url: '/assets/img/Madeline Hart.png',
    //       //       vimeo_url: '/assets/img/video.png',
    //       //       style: 'Nisi nec rhoncus ultrices, ligula urna efficitur libero, a luctus tortor justo vitae tellus.',
    //       //       city: 'London',
    //       //       qualifications: 'Diploma in Thai Yoga',
    //       //       created_at: '',
    //       //       created_by: '',
    //       //       updated_at: '',
    //       //       telephone: '07979 4671314',
    //       //       email: 'j.hart@hrt.com'
    //       //     }
    //       //   ]
    //       // },
    //       // notifications: [
    //       //   {
    //       //     id: 1,
    //       //     title: 'Madelaine Hart confirmed your booking',
    //       //     description: 'Private session, 02/07/19',
    //       //     action: 'View'
    //       //   },
    //       //   {
    //       //     id: 2,
    //       //     title: 'Madelaine Hart added a new class',
    //       //     description: 'Tuesday class',
    //       //     action: 'Practice'
    //       //   }
    //       // ]
    //     }
    //   };
    // }

    // Switch user view status - student / creator
    if (url === this.BASE_URL + '/user/switch-view-status' && method === 'POST') {
      return {
        status: 200,
        body: {
          id: 3,
          ...body
        }
      };
    }

    // Get teachers list
    // if (url === this.BASE_URL + '/teachers' && method === 'GET') {
    //   return {
    //     status: 200,
    //     body: [
    //       {
    //         id: 2,
    //         firstName: 'Sophia',
    //         lastName: 'Medina'
    //       },
    //       {
    //         id: 3,
    //         firstName: 'Lorena',
    //         lastName: 'Terry'
    //       },
    //       {
    //         id: 4,
    //         firstName: 'Nathan',
    //         lastName: 'Roberts'
    //       }
    //     ]
    //   };
    // }

    // Onboarding, student, store step one
    if (url === this.BASE_URL + '/onboarding/student/step-one' && method === 'POST') {
      return {
        status: 200,
        body: {
          status: 'Step one for student is stored'
        }
      };
    }

    // Onboarding, teacher, store step one
    if (url === this.BASE_URL + '/onboarding/teacher/step-one' && method === 'POST') {
      return {
        status: 200,
        body: {
          status: 'Step one for teacher is stored'
        }
      };
    }

    // Onboarding, teacher, store step two
    if (url === this.BASE_URL + '/onboarding/teacher/step-two' && method === 'POST') {
      return {
        status: 200,
        body: {
          status: 'Step two for teacher is stored'
        }
      };
    }

    // Upload user profile image
    if (url === this.BASE_URL + '/user/1/profile-image' && method === 'POST') {
      return {
        status: 200,
        body: {
          image: '/assets/img/logo.svg'
        }
      };
    }

    // Notifications
    if (url === this.BASE_URL + '/notifications' && method === 'GET') {
      return {
        status: 200,
        body: [
          {
            id: 1,
            title: 'Madelaine Hart confirmed your booking',
            description: 'Private session, 02/07/19',
            action: 'View'
          },
          {
            id: 2,
            title: 'Madelaine Hart added a new class',
            description: 'Tuesday class',
            action: 'Practice'
          },
          {
            id: 3,
            title: 'Madelaine Hart confirmed your booking',
            description: 'Private session, 02/07/19',
            action: 'View'
          },
          {
            id: 4,
            title: 'Madelaine Hart added a new class',
            description: 'Tuesday class',
            action: 'Practice'
          },
          {
            id: 5,
            title: 'Madelaine Hart confirmed your booking',
            description: 'Private session, 02/07/19',
            action: 'View'
          }
        ]
      };
    }

    // Get teacher profile data
    // if (url === this.BASE_URL + '/teachers/1' && method === 'GET') {
    //   return {
    //     status: 200,
    //     body: {
    //       id: 2,
    //       title: 'Madeline Hart',
    //       description: 'Nisi nec rhoncus ultrices, ligula urna efficitur libero, a luctus tortor justo vitae tellus.',
    //       image_id: '1',
    //       image_url: '/assets/img/Madeline Hart.png',
    //       vimeo_url: '/assets/img/video.png',
    //       style: 'Nisi nec rhoncus ultrices, ligula urna efficitur libero, a luctus tortor justo vitae tellus.',
    //       city: 'London',
    //       qualifications: 'Diploma in Thai Yoga',
    //       created_at: '',
    //       created_by: '',
    //       updated_at: '',
    //       telephone: '07979 4671314',
    //       email: 'j.hart@hrt.com',
    //       recordings: [
    //         {
    //           id: 1,
    //           title: 'Sample classes',
    //           slug: 'slug',
    //           length: 'Weekly 1 hour',
    //           start_timestamp: '',
    //           end_timestamp: '',
    //           created_at: '',
    //           created_by: '',
    //           updated_at: '',
    //           cover_image: '/assets/img/cover_image.png'
    //         },
    //         {
    //           id: 1,
    //           title: 'Sample classes',
    //           slug: 'slug',
    //           length: 'Weekly 1 hour',
    //           start_timestamp: '',
    //           end_timestamp: '',
    //           created_at: '',
    //           created_by: '',
    //           updated_at: '',
    //           cover_image: '/assets/img/cover_image.png'
    //         }
    //       ],
    //       links: [
    //         {
    //           id: '',
    //           label: '',
    //           url: 'https://twitter.com/mhartyoga',
    //           created_at: '',
    //           created_by: '',
    //           updated_at: ''
    //         },
    //         {
    //           id: '',
    //           label: '',
    //           url: 'https://instagram.com/mhartyoga',
    //           created_at: '',
    //           created_by: '',
    //           updated_at: ''
    //         },
    //         {
    //           id: '',
    //           label: '',
    //           url: 'https://www.facebook.com/mhartyoga',
    //           created_at: '',
    //           created_by: '',
    //           updated_at: ''
    //         },
    //         {
    //           id: '',
    //           label: '',
    //           url: 'https://www.linkedin.com/in/mhartyoga',
    //           created_at: '',
    //           created_by: '',
    //           updated_at: ''
    //         },
    //         {
    //           id: '',
    //           label: '',
    //           url: 'https://www.loremipsum.com',
    //           created_at: '',
    //           created_by: '',
    //           updated_at: ''
    //         }
    //       ]
    //     }
    //   };
    // }

    // if (url === this.BASE_URL + '/teachers/1/update' && method === 'POST') {
    //   return {
    //     status: 200,
    //     body: {
    //       id: 2,
    //       title: 'Madeline Hart',
    //       description: 'Nisi nec rhoncus ultrices, ligula urna efficitur libero, a luctus tortor justo vitae tellus.',
    //       image_id: '1',
    //       image_url: '/assets/img/Madeline Hart.png',
    //       vimeo_url: '/assets/img/video.png',
    //       style: 'style',
    //       city: 'city',
    //       qualifications:
    //         'Nisi nec rhoncus ultrices, ligula urna efficitur libero, a luctus tortor justo vitae tellus.',
    //       created_at: '',
    //       created_by: '',
    //       updated_at: '',
    //       telephone: '07979 1111111',
    //       email: 'j.hart@hrt.com',
    //       recordings: [
    //         {
    //           id: 1,
    //           title: 'Sample classes',
    //           slug: 'slug',
    //           length: 'Weekly 1 hour',
    //           start_timestamp: '',
    //           end_timestamp: '',
    //           created_at: '',
    //           created_by: '',
    //           updated_at: '',
    //           cover_image: '/assets/img/cover_image.png'
    //         },
    //         {
    //           id: 1,
    //           title: 'Sample classes',
    //           slug: 'slug',
    //           length: 'Weekly 1 hour',
    //           start_timestamp: '',
    //           end_timestamp: '',
    //           created_at: '',
    //           created_by: '',
    //           updated_at: '',
    //           cover_image: '/assets/img/cover_image.png'
    //         }
    //       ],
    //       links: [
    //         {
    //           id: '',
    //           label: '',
    //           url: '@mhartyoga.new',
    //           created_at: '',
    //           created_by: '',
    //           updated_at: ''
    //         },
    //         {
    //           id: '',
    //           label: '',
    //           url: 'www.studioabc_new.com',
    //           created_at: '',
    //           created_by: '',
    //           updated_at: ''
    //         },
    //         {
    //           id: '',
    //           label: '',
    //           url: 'www.loremipsum_new.com',
    //           created_at: '',
    //           created_by: '',
    //           updated_at: ''
    //         }
    //       ]
    //     }
    //   };
    // }

    // Get poses list
    // if (url === this.BASE_URL + '/poses' && method === 'GET') {
    //   return {
    //     status: 200,
    //     body: [
    //       {
    //         title: 'Test pose 123132',
    //         text:
    //           'some test pose\r\nsdfsdfkjsdkfsnjfk kjshndfkjs fkjsbdjf hsbd fhjs bdfj. sdfsdfkjsdkfsnjfk kjshndfkjs fkjsbdjf hsbd fhjs bdfj. sdfsdfkjsdkfsnjfk kjshndfkjs fkjsbdjf hsbd fhjs bdfj. sdfsdfkjsdkfsnjfk kjshndfkjs fkjsbdjf hsbd fhjs bdfj. sdfsdfkjsdkfsnjfk kjshndfkjs fkjsbdjf hsbd fhjs bdfj. \r\nsdfsdfkjsdkfsnjfk kjshndfkjs fkjsbdjf hsbd fhjs bdfj. sdfsdfkjsdkfsnjfk kjshndfkjs fkjsbdjf hsbd fhjs bdfj. sdfsdfkjsdkfsnjfk kjshndfkjs fkjsbdjf hsbd fhjs bdfj. sdfsdfkjsdkfsnjfk kjshndfkjs fkjsbdjf hsbd fhjs bdfj. sdfsdfkjsdkfsnjfk kjshndfkjs fkjsbdjf hsbd fhjs bdfj. sdfsdfkjsdkfsnjfk kjshndfkjs fkjsbdjf hsbd fhjs bdfj. sdfsdfkjsdkfsnjfk kjshndfkjs fkjsbdjf hsbd fhjs bdfj.',
    //         image:
    //           '//dev-api.journeyinto.com/uploads/poses/triangle-pose-beginner-yoga_cd85POV.jpg.1200x960_q90_box-23%2C0%2C705%2C546_crop_detail.jpg',
    //         thumbnail:
    //           '//dev-api.journeyinto.com/uploads/poses/triangle-pose-beginner-yoga_cd85POV.jpg.570x480_q90_box-40%2C0%2C688%2C546_crop_detail.jpg',
    //         slug: 'test-pose'
    //       },
    //       {
    //         title: 'Triangle pose 1',
    //         text:
    //           'Stand in Tadasana (Mountain Pose). Inhale, shift your weight onto your right foot, and lift your left heel toward your left buttock as you bend the knee. Press the head of your right thigh bone back, deep into the hip joint, and pull the knee cap up to keep the standing leg straight and strong.',
    //         image: '//dev-api.journeyinto.com/uploads/poses/sdf.png.1200x960_q90_box-0%2C6%2C285%2C234_crop_detail.png',
    //         thumbnail:
    //           '//dev-api.journeyinto.com/uploads/poses/sdf.png.570x480_q90_box-0%2C0%2C285%2C240_crop_detail.png',
    //         slug: 'triangle-pose-1'
    //       },
    //       {
    //         title: 'Triangle pose 1',
    //         text:
    //           'Stand in Tadasana (Mountain Pose). Inhale, shift your weight onto your right foot, and lift your left heel toward your left buttock as you bend the knee. Press the head of your right thigh bone back, deep into the hip joint, and pull the knee cap up to keep the standing leg straight and strong.',
    //         image: '//dev-api.journeyinto.com/uploads/poses/sdf.png.1200x960_q90_box-0%2C6%2C285%2C234_crop_detail.png',
    //         thumbnail:
    //           '//dev-api.journeyinto.com/uploads/poses/sdf.png.570x480_q90_box-0%2C0%2C285%2C240_crop_detail.png',
    //         slug: 'triangle-pose-2'
    //       },
    //       {
    //         title: 'Triangle pose 1',
    //         text:
    //           'Stand in Tadasana (Mountain Pose). Inhale, shift your weight onto your right foot, and lift your left heel toward your left buttock as you bend the knee. Press the head of your right thigh bone back, deep into the hip joint, and pull the knee cap up to keep the standing leg straight and strong.',
    //         image: '//dev-api.journeyinto.com/uploads/poses/sdf.png.1200x960_q90_box-0%2C6%2C285%2C234_crop_detail.png',
    //         thumbnail:
    //           '//dev-api.journeyinto.com/uploads/poses/sdf.png.570x480_q90_box-0%2C0%2C285%2C240_crop_detail.png',
    //         slug: 'triangle-pose-3'
    //       },
    //       {
    //         title: 'Triangle pose 1',
    //         text:
    //           'Stand in Tadasana (Mountain Pose). Inhale, shift your weight onto your right foot, and lift your left heel toward your left buttock as you bend the knee. Press the head of your right thigh bone back, deep into the hip joint, and pull the knee cap up to keep the standing leg straight and strong.',
    //         image: '//dev-api.journeyinto.com/uploads/poses/sdf.png.1200x960_q90_box-0%2C6%2C285%2C234_crop_detail.png',
    //         thumbnail:
    //           '//dev-api.journeyinto.com/uploads/poses/sdf.png.570x480_q90_box-0%2C0%2C285%2C240_crop_detail.png',
    //         slug: 'triangle-pose-4'
    //       },
    //       {
    //         title: 'Triangle pose 1',
    //         text:
    //           'Stand in Tadasana (Mountain Pose). Inhale, shift your weight onto your right foot, and lift your left heel toward your left buttock as you bend the knee. Press the head of your right thigh bone back, deep into the hip joint, and pull the knee cap up to keep the standing leg straight and strong.',
    //         image: '//dev-api.journeyinto.com/uploads/poses/sdf.png.1200x960_q90_box-0%2C6%2C285%2C234_crop_detail.png',
    //         thumbnail:
    //           '//dev-api.journeyinto.com/uploads/poses/sdf.png.570x480_q90_box-0%2C0%2C285%2C240_crop_detail.png',
    //         slug: 'triangle-pose-5'
    //       }
    //     ]
    //   };
    // }
    //
    // // Get profile pose
    // if (url === this.BASE_URL + '/poses/triangle-pose-1' && method === 'GET') {
    //   return {
    //     status: 200,
    //     body: {
    //       title: 'Triangle pose 1',
    //       text:
    //         'Stand in Tadasana (Mountain Pose). Inhale, shift your weight onto your right foot, and lift your left heel toward your left buttock as you bend the knee. Press the head of your right thigh bone back, deep into the hip joint, and pull the knee cap up to keep the standing leg straight and strong.',
    //       image: '//dev-api.journeyinto.com/uploads/poses/sdf.png.1200x960_q90_box-0%2C6%2C285%2C234_crop_detail.png',
    //       thumbnail:
    //         '//dev-api.journeyinto.com/uploads/poses/sdf.png.570x480_q90_box-0%2C0%2C285%2C240_crop_detail.png',
    //       slug: 'triangle-pose-1'
    //     }
    //   };
    // }

    // Get creator students
    if (url === this.BASE_URL + '/creator/students' && method === 'GET') {
      return {
        status: 200,
        body: [
          {
            id: 1,
            img: 'Mask.png',
            name: 'Rita Mantler',
            status: 'decline'
          },
          {
            id: 2,
            img: 'Mask.png',
            name: 'Amy Leenman',
            status: 'decline'
          },
          {
            id: 3,
            img: 'Mask.png',
            name: 'Lai Jong',
            status: 'decline'
          },
          {
            id: 4,
            img: 'Mask.png',
            name: 'Greg Woodruff',
            status: 'approve'
          },
          {
            id: 5,
            img: 'Mask.png',
            name: 'Katie Martindale',
            status: 'approve'
          }
        ]
      };
    }

    return false;
  }

  /**
   * Intercept with mock response
   *
   * @param req
   * @param next
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const response = this.createResponse(req);

    if (response) {
      // console.log('MOCK INTERCEPT', req.url, response);
    }

    return response ? of(new HttpResponse(response as any)) : next.handle(req);
  }
}
