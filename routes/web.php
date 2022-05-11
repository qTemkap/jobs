<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::group(['namespace' => 'Auth'], function() {
    Route::get('login', 'LoginController@showLoginForm')->name('login');
    Route::post('login', 'LoginController@login');
    Route::get('logout', 'LoginController@logout')->name('logout.get');
    Route::post('logout', 'LoginController@logout')->name('logout.post');

    Route::get('login/with/{provider}/{role}', 'SocialNetworksController@redirectToProvider');
    Route::get('login/callback/{provider}', 'SocialNetworksController@handleProviderCallback');

    // Registration Routes...
    Route::get('register', 'RegisterController@showRegistrationForm')->name('register');
    Route::post('register', 'RegisterController@register');

    // Password Reset Routes...
    Route::get('password/reset', 'ForgotPasswordController@showLinkRequestForm')->name('password.request');
    Route::post('password/email', 'ForgotPasswordController@sendResetLinkEmail')->name('password.email');
    Route::get('password/reset/{token}', 'ResetPasswordController@showResetForm')->name('password.reset');
    Route::post('password/reset', 'ResetPasswordController@reset')->name('password.update');

    // Email Verification Routes...
    Route::get('email/verify', 'VerificationController@show')->name('verification.notice');
    Route::get('email/verify/{id}', 'VerificationController@verify')->name('verification.verify');
    Route::get('email/resend', 'VerificationController@resend')->name('verification.resend');
});

Route::get('/',  ['uses' => 'HomeController@index'])->name('main');

Route::group(['prefix' => 'test'], function() {
    Route::get('show',  ['uses' => 'TestController@show']);
    Route::get('list',  ['uses' => 'TestController@list']);
    Route::get('summary',  ['uses' => 'TestController@summary']);
});

//JOB SEARCH
Route::group(['namespace' => 'JobSearch', 'middleware' => []], function() {
    Route::get('/jobs',  ['uses' => 'ListController@index'])->name('search.job.list');
    Route::get('/jobs/search',  ['uses' => 'ListController@search'])->name('search.job.search');
    Route::get('/job/show/{id}',  ['uses' => 'ListController@show'])->name('search.job.show')->where('id', '[0-9]+');
    Route::get('/job/print/{id}',  ['uses' => 'ListController@printOut'])->name('search.job.print')->where('id', '[0-9]+');

    Route::get('/company/show/{id}', ['uses' => 'CompanyController@show'])->name('company.show')->where('id', '[0-9]+');
    Route::get('/company/vacancies/{company_id}', ['uses' => 'CompanyController@vacancies'])->name('company.vacancies')->where('company_id', '[0-9]+');

    Route::post('/job/resumes/choice',  ['uses' => 'RespondController@get'])->name('job.resumes.choice')->middleware('role:job_seeker');
    Route::post('/job/response',  ['uses' => 'RespondController@store'])->name('job.response.add')->middleware('role:job_seeker');
});

//RECRUITING
Route::group(['namespace' => 'Recruiting', 'middleware' => []], function() {
    Route::get('/resumes',  ['uses' => 'ListController@index'])->name('search.resume.list');
    Route::get('/resumes/search',  ['uses' => 'ListController@search'])->name('search.resume.search');
    Route::get('/resume/show/{id}',  ['uses' => 'ListController@show'])->name('search.resume.show')->where('id', '[0-9]+');
    Route::get('/resume/print/{id}',  ['uses' => 'ListController@printOut'])->name('search.resume.print')->where('id', '[0-9]+');

    Route::post('/resume/response/choice',  ['uses' => 'RespondController@get'])->name('resume.response.choice')->middleware('role:employer');
    Route::post('/resume/response/offer',  ['uses' => 'RespondController@offer'])->name('job.resumes.choice')->middleware('role:employer');

    Route::post('/resume/response',  ['uses' => 'RespondController@store'])->name('resume.response.save')->middleware('role:employer');
    Route::post('/resume/response/offer-store',  ['uses' => 'RespondController@offerStore'])->name('resume.response.offer.save')->middleware('role:employer');
});

//JOB SEEKER PROFILE
Route::group(['namespace' => 'JobSeeker', 'middleware' => ['verified', 'role:job_seeker']], function() {

    Route::patch('/profile/store',  ['uses' => 'ProfileController@store'])->name('profile.store');
    Route::patch('/profile/change_password',  ['uses' => 'ProfileController@changePassword'])->name('profile.password.change');
    Route::get('/profile',  ['uses' => 'ProfileController@edit'])->name('profile');

    Route::patch('/summary/store',  ['uses' => 'SummaryController@store'])->name('summary.store');
    Route::get('/summaries',  ['uses' => 'SummaryController@list'])->name('summary.list');
    Route::get('/summary/create',  ['uses' => 'SummaryController@create'])->name('summery.create');
    Route::get('/summary/edit/{id}',  ['uses' => 'SummaryController@edit'])->name('summery.edit')->where('id', '[0-9]+');
    Route::post('/summary/update/{id}',  ['uses' => 'SummaryController@update'])->name('summery.update')->where('id', '[0-9]+');
    Route::get('/summary/delete-scan/{id}',  ['uses' => 'SummaryController@deleteScan'])->name('summery.delete.scan')->where('id', '[0-9]+');
    Route::get('/summary/{id}',  ['uses' => 'SummaryController@show'])->name('summery.show')->where('id', '[0-9]+');
    Route::delete('/summary/delete/{id}',  ['uses' => 'SummaryController@destroy'])->name('summery.delete')->where('id', '[0-9]+');
    Route::get('/summary/offer/{id}',  ['uses' => 'SummaryController@offer'])->name('summery.offer')->where('id', '[0-9]+');
    Route::put('/summary/change_rating',  ['uses' => 'SummaryController@changeRating'])->name('summery.change_rating');

    Route::post('job_seeker/offer_category',  ['uses' => 'OfferCategoryController@send'])->name('job_seeker.offer_category');

    Route::get('vacancies/favorite',  ['uses' => 'VacancyController@favorite'])->name('vacancies.favorite');
    Route::post('vacancies/favorite/add',  ['uses' => 'VacancyController@favoriteAdd'])->name('vacancies.favorite.add');
    Route::delete('vacancies/favorite/delete/{id}',  ['uses' => 'VacancyController@destroy'])->name('vacancies.favorite.destroy');
});

//JOB Employer PROFILE
Route::group(['namespace' => 'Employer', 'middleware' => ['verified', 'role:employer']], function() {

    Route::patch('employer/profile/store',  ['uses' => 'ProfileController@store'])->name('employer.profile.store');
    Route::patch('employer/profile/change_password',  ['uses' => 'ProfileController@changePassword'])->name('employer.profile.password.change');
    Route::get('employer/profile',  ['uses' => 'ProfileController@edit'])->name('employer.profile');

    Route::get('/company/edit',  ['uses' => 'CompanyController@edit'])->name('company.edit');
    Route::patch('/company/update',  ['uses' => 'CompanyController@update'])->name('company.update');
    Route::patch('/company/update/information',  ['uses' => 'CompanyController@updateInformation'])->name('company.update.information');
    Route::patch('/company/update/about',  ['uses' => 'CompanyController@updateAbout'])->name('company.update.about');
    Route::patch('/company/update/contacts',  ['uses' => 'CompanyController@updateContacts'])->name('company.update.contacts');

    Route::patch('/vacancy/store',  ['uses' => 'VacanciesController@store'])->name('vacancy.store');
    Route::get('/vacancies',  ['uses' => 'VacanciesController@list'])->name('vacancy.list');
    Route::get('/vacancy/create',  ['uses' => 'VacanciesController@create'])->name('vacancy.create');
    Route::get('/vacancy/edit/{id}',  ['uses' => 'VacanciesController@edit'])->name('vacancy.edit')->where('id', '[0-9]+');
    Route::patch('/vacancy/update/{id}',  ['uses' => 'VacanciesController@update'])->name('vacancy.update')->where('id', '[0-9]+');
    Route::get('/vacancy/{id}',  ['uses' => 'VacanciesController@show'])->name('vacancy.show')->where('id', '[0-9]+');
    Route::delete('/vacancy/delete/{id}',  ['uses' => 'VacanciesController@destroy'])->name('vacancy.delete')->where('id', '[0-9]+');

    Route::get('/vacancy/responses/{vacancyId}', ['uses' => 'ResponsesController@list'])->name('vacancy.responses.list')->where('vacancyId', '[0-9]+');
    Route::get('/vacancy/responses/view/{respondId}', ['uses' => 'ResponsesController@view'])->name('vacancy.responses.view')->where('respondId', '[0-9]+');
    Route::put('/vacancy/responses/change_rating', ['uses' => 'ResponsesController@changeRating'])->name('vacancy.responses.change_rating')->where('respondId', '[0-9]+');

    Route::post('employer/offer_category',  ['uses' => 'OfferCategoryController@send'])->name('employer.offer_category');
});


//SHARED DATA STORAGE
Route::group(['namespace' => 'Store'], function() {
    Route::get('/cities/get_all',  ['uses' => 'CitiesController@getAll'])->name('store.cities.get_all');
    Route::get('/employment_types/get_all',  ['uses' => 'EmploymentTypesController@getAll'])->name('store.employment_types.get_all');
    Route::get('/categories/get_all',  ['uses' => 'CategoriesController@getAll'])->name('store.categories.get_all');
    Route::get('/education_levels/get_all',  ['uses' => 'EducationLevelsController@getAll'])->name('store.education_levels.get_all');
    Route::get('/company_sizes/get_all',  ['uses' => 'CompanySizesController@getAll'])->name('store.company_sizes.get_all');
    Route::get('/company_types/get_all',  ['uses' => 'CompanyTypesController@getAll'])->name('store.company_types.get_all');
    Route::get('/recruiting/get_filters',  ['uses' => 'RecruitingController@getFilters'])->name('store.resume_search.get_filters');
    Route::get('/autocomplete/get_all',  ['uses' => 'AutocompleteController@getAll'])->name('store.autocomplete.get_all');
    Route::get('/autocomplete/vacancies',  ['uses' => 'AutocompleteController@getVacancies'])->name('store.autocomplete.get_vacancies');
    Route::get('/autocomplete/summaries',  ['uses' => 'AutocompleteController@getSummaries'])->name('store.autocomplete.get_summaries');
});

//SHARED DATA STORAGE
Route::group(['namespace' => 'Statics'], function() {
    Route::get('/about-us/conditions/',  ['uses' => 'ConditionsController@show'])->name('static.conditions.show');

    Route::get('/faq',  ['uses' => 'FaqController@show'])->name('faq.show');

    Route::post('/faq/question',  ['uses' => 'FaqController@question'])->name('faq.question');

    Route::get('/companies',  ['uses' => 'CompanyController@show'])->name('company.show.list');

    Route::get('/cities',  ['uses' => 'CityController@show'])->name('city.show.list');
});

//FROM IMAGES MANAGEMENT
Route::group(['namespace' => 'Image', 'middleware' => ['verified']], function() {
    Route::group(['middleware' => ['role:job_seeker']], function() {
        Route::match(['PUT'], '/image/job_seeker/avatar/upload',  ['uses' => 'JobSeekerController@upload'])->name('image.job_seeker.store');
        Route::delete('/image/job_seeker/avatar/delete',  ['uses' => 'JobSeekerController@delete'])->name('image.job_seeker.delete');
    });

    Route::group(['middleware' => ['role:employer']], function() {
        Route::match(['PUT'], '/image/employer/avatar/upload',  ['uses' => 'EmployerController@upload'])->name('image.employer.store');
        Route::delete('/image/employer/avatar/delete',  ['uses' => 'EmployerController@delete'])->name('image.employer.delete');
        Route::match(['PUT'], '/image/company/logo/upload',  ['uses' => 'CompanyController@upload'])->name('image.company.store');
        Route::delete('/image/company/logo/delete',  ['uses' => 'CompanyController@delete'])->name('image.company.delete');
    });
});
