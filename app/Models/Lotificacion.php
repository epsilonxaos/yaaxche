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
		'etapa',
		'lote',
		'vista',
		'frente',
		'fondo',
		'm2',
		'precio_total',
		'status',
		'enganche',
		'precio_48',
		'precio_36',
		'precio_24',
		'precio_12',
		'precio_6',
		'contado',
		'apartado',
	];
}
