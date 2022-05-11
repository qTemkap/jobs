<?php

use App\Education;
use Carbon\Carbon;

use Faker\Generator as Faker;

$institutionNames = [
    'Национальный исследовательский университет «МИЭТ».',
    'Самарский гос. медицинский университет.',
    'Южно-Уральский государственный университет (НИУ).',
    'Уфимский гос. нефтяной технический университет.',
    'Северо-Западный гос. мед. университет имени И.И. Мечникова.',
    'Уральский гос. горный университет.',
    'Российский химико-технологический университет имени Д.И. Менделеева.',
    'Московский гос. технологический университет «СТАНКИН».',
    'Российский гос. педагогический университет имени А.И. Герцена.',
    'Тюменский гос. нефтегазовый университет.',
    'Воронежский гос. университет.',
    'Дальневосточный федеральный университет.',
    'Московский гос. медико-стоматологический университет имени А.И. Евдокимова.',
];

$specialtyNames =[
    'Государственное и муниципальное управление',
    'Менеджмент',
    'Экономика',
    'Бизнес-информатика',
    'Юриспруденция',
    'Реклама и связи с общественностью',
    'Международные отношения',
    'Управление персоналом',
    'Информатика и вычислительная техника',
    'Экономическая безопасность',
    'Гостиничное дело',
    'Лечебное дело',
    'Туризм',
    'Таможенное дело',
    'Судебная экспертиза',
    'Информационные системы и технологии',
    'Правовое обеспечение национальной безопасности',
];

$factory->define(Education::class, function (Faker $faker) use($institutionNames, $specialtyNames) {

    $iStudy = random_int(0,1);

    $studyWith = Carbon::create(random_int(1976, 2018), random_int(1, 12), 01);

    if($iStudy === 1){
        $studyTo = Carbon::create(($studyWith->year + random_int(4,6)), random_int(1, 12), 01);
    } else {
        $studyTo = null;
    }

    return [
        'education_level_id' => random_int(1,8),
        'institution' => $institutionNames[array_rand($institutionNames, 1)],
        'specialty' => $specialtyNames[array_rand($specialtyNames, 1)],
        'city' => $faker->city,
        'study_with' => $studyWith,
        'study_to' => $studyTo,
    ];
});
