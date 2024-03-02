<?php

namespace App\Http\Controllers;

use App\DataTables\LotificacionDataTable;
use App\Models\Lotificacion;
use Illuminate\Http\Request;

class LotificacionController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index(LotificacionDataTable $dataTable)
	{
		$data = Lotificacion::all();
		return $dataTable->render('panel.lotificacion.index', [
			"title" => "Lotificacion",
			"breadcrumb" => [
				[
					'title' => 'Lotificacion',
					'active' => true
				]
			],
			"data" => $data
		]);
	}

	/**
	 * Show the form for creating a new resource.
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request)
	{
		//
	}

	/**
	 * Display the specified resource.
	 */
	public function show(Lotificacion $lotificacion)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(Lotificacion $lotificacion)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request)
	{
		$up = Lotificacion::find($request->id);

		$up->precio = floatval(str_replace(",", "", $request->precio));
		$up->precio12 = floatval(str_replace(",", "", $request->precio12));
		$up->precio18 = floatval(str_replace(",", "", $request->precio18));
		$up->frente = $request->frente;
		$up->fondo = $request->fondo;
		$up->m2 = $request->m2;
		$up->save();

		return redirect()->back()->with('success', 'El <span class="font-bold">lote #' . $up->lote . '</span> se acutalizo correctamente ');
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function updateStatus(Request $request)
	{
		$up = Lotificacion::find($request->id);
		$up->status = $request->status;
		$up->save();

		$estado = '';
		if ($request->status == 1) {
			$estado = '<span class="text-green-600 font-bold">Disponible</span>';
		} elseif ($request->status == 2) {
			$estado = '<span class="text-yellow-600 font-bold">Apartado</span>';
		} else {
			$estado = '<span class="text-red-600 font-bold">Vendido</span>';
		}


		return redirect()->back()->with('success', 'El <span class="font-bold">lote #' . $up->lote . '</span> se acutalizo correctamente, ahora se encuentra ' . $estado);
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(Lotificacion $lotificacion)
	{
		//
	}
}
