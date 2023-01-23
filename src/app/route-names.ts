export const jIWebsite = 'https://journeyinto.com';

export enum ExternalRouteNames {
    about = 'https://journeyinto.com/about',
    howto = 'https://journeyinto.com/howto',
    tnc = 'https://journeyinto.com/termsandconditions',
    privacy = 'https://journeyinto.com/privacypolicy'
}

export enum RouteNames {
    notFound = '404',
    account = 'account',
    all = 'all',
    bookings = 'bookings',
    calendar = 'calendar',
    editAudio = 'edit-audio',
    editRecording = 'edit-recording',
    editProfile = 'edit-profile',
    resetPassword = 'reset-password',
    login = 'login',
    list = 'list',
    myPractice = 'my-practice',
    new = 'new',
    newSlot = 'new-slot',
    notifications = 'notifications',
    onboarding = 'onboarding',
    recordings = 'recordings',
    poses = 'postures',
    profile = 'profile',
    profileEdit = 'profile-edit',
    profileView = 'profile-view',
    signup = 'signup',
    stepOne = 'step-one',
    stepTwo = 'step-two',
    student = 'student',
    students = 'students',
    subscription = 'subscription',
    teacher = 'teacher',
    teachers = 'teachers',
    addClass = 'add-class'
}

export const TeacherStepOne = ['/', RouteNames.onboarding, RouteNames.teacher, RouteNames.stepOne];
export const TeacherStepTwo = ['/', RouteNames.onboarding, RouteNames.teacher, RouteNames.stepTwo];
