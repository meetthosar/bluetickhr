<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseToken extends Model
{
	use HasFactory;
	
    public $timestamps = true;

    protected $table = 'courseTokens';

    protected $fillable = ['course_id','token_id'];
	
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function course()
    {
        return $this->hasOne('App\Models\Course', 'id', 'course_id');
    }
    
}
