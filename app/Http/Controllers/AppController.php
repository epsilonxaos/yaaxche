<?php

namespace App\Http\Controllers;

use App\Models\Lotificacion;
use Illuminate\Http\Request;

class AppController extends Controller
{
	public function lotificacion()
	{
		$datos  = Lotificacion::all();
		return response($datos, 200);
	}
}
