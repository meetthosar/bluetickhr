<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Course;
use App\Models\Skill;
use App\Models\University;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // Admin USer
        $admin = \App\Models\User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
        ]);



        $role_admin = Role::create(['name' => 'Admin']);
        $admin->assignRole('Admin');
        $role_university = Role::create(['name' => 'University']);
        $role_student = Role::create(['name' => 'Student']);
        $role_company = Role::create(['name' => 'Company']);

        $permission_manage_course = Permission::create(['name' => 'manage course']);
        $permission_manage_admission = Permission::create(['name' => 'manage admission']);
        $permission_revoke_course = Permission::create(['name' => 'revoke course']);

        $permission_apply_course = Permission::create(['name' => 'apply course']);
        $permission_create_poll = Permission::create(['name' => 'create poll']);

        $permission_offer_job = Permission::create(['name' => 'offer job']);
        $permission_rate_condidate = Permission::create(['name' => 'rate candidate']);

        $role_university->givePermissionTo($permission_manage_course);
        $role_university->givePermissionTo($permission_manage_admission);
        $role_university->givePermissionTo($permission_revoke_course);

        $role_student->givePermissionTo($permission_apply_course);
        $role_student->givePermissionTo($permission_create_poll);

        $role_company->givePermissionTo($permission_offer_job);
        $role_company->givePermissionTo($permission_create_poll);

        $skills = Skill::factory()->count(10)->create();
        // University
        /*$university_users = \App\Models\User::factory()->count(2)->create();

        $universities = [];
        foreach ($university_users as $university_user) {
            $university = University::factory()->create(['user_id' => $university_user->id]);
            $courses = Course::factory()->count(4)->create(['university_id' => $university->id]);
            $university_user->assignRole('University');
        }

        // Student
        $student = \App\Models\User::factory()->create([
            'name' => 'University User',
            'email' => 'university@example.com',
        ]);
//        $admin->assignRole('Admin');
        $student->assignRole('Student');*/
    }
}
