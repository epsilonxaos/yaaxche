<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lotificacion extends Model
{
    use HasFactory;

	protected $table = 'lotificacions';
	protected $primaryKey = 'id';
	protected $fillable = [
		'fondo',
		'frente',
		'lote',
		'm2',
		'precio',
		'precio12',
		'precio18',
		'precio36',
		'status',
	];
}
