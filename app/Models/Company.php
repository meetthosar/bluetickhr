<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
	use HasFactory;
	
    public $timestamps = true;

    protected $table = 'companies';

    protected $fillable = ['user_id','name','address'];
	
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function companyRecruitments()
    {
        return $this->hasMany('App\Models\CompanyRecruitment', 'company_id', 'id');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function user()
    {
        return $this->hasOne('App\Models\User', 'id', 'user_id');
    }
    
}
