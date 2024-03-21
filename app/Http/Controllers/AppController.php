<?php

namespace App\Http\Controllers;

use App\Models\Lotificacion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class AppController extends Controller
{
	public function lotificacion()
	{
		$datos  = Lotificacion::all();
		return response($datos, 200);
	}

	public function send(Request $request)
	{
		$datosWebhook = [
			'name' => $request->nombre,
			'lastname' => $request->apellido,
			'email' => $request->correo,
			'city' => $request->ciudad,
			'phone' => $request->telefono,
		];

		try {
			// Envia los datos del webhook a una URL externa (cambia 'URL_WEBOOK' por la URL real)
			Http::post('https://webhook.site/4d378513-9694-462c-b7d9-7de01d94a0fe', $datosWebhook);
			return response('Datos enviados correctamente', 200);
		} catch (\Exception $error) {
			// Maneja el error al enviar el webhook
			Log::error('Error al enviar el webhook: ' . $error->getMessage());
			return response('Error interno del servidor', 500);
		}
	}
}
