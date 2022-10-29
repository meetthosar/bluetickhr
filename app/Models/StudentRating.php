<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentRating extends Model
{
	use HasFactory;
	
    public $timestamps = true;

    protected $table = 'studentRatings';

    protected $fillable = ['student_id','token_id','company_id','colleague_id','rating'];
	
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function user()
    {
        return $this->hasOne('App\Models\User', 'id', 'student_id');
    }
    
}
