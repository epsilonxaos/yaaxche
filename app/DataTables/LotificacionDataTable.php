<?php

namespace App\DataTables;

use App\Models\Lotificacion;
use Illuminate\Database\Eloquent\Builder as QueryBuilder;
use Yajra\DataTables\EloquentDataTable;
use Yajra\DataTables\Html\Builder as HtmlBuilder;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Html\Editor\Editor;
use Yajra\DataTables\Html\Editor\Fields;
use Yajra\DataTables\Services\DataTable;

class LotificacionDataTable extends DataTable
{
	/**
	 * Build the DataTable class.
	 *
	 * @param QueryBuilder $query Results from query() method.
	 */
	public function dataTable(QueryBuilder $query): EloquentDataTable
	{
		return (new EloquentDataTable($query))
			->setRowId('id')
			->addColumn('lote', function (Lotificacion $item) {
				return "Lote #" . $item->lote;
			})
			->filter(function ($query) {
				if (request()->has('lote')) {
					$query->where('lote', 'like', "%" . request('lote') . "%");
				}
			}, true)
			->addColumn('acciones', function (Lotificacion $item) {

				$acciones = '<div class="flex items-start justify-center mx-auto" style="min-width: 100px">';

				$acciones .= '
					<button type="button" class="font-medium text-emerald-600 dark:text-emerald-500 mr-2" onClick="openModal(' . $item->id . ')">
						<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							<path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
							<path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
							<path d="M16 5l3 3"></path>
						</svg>
						</button>';

				$acciones .= '</div>';

				return $acciones;
			})
			->addColumn('status', function (Lotificacion $item) {

				$ruta = route('panel.lotificacion.updateStatus');
				$status = '<div class="flex items-center justify-center" style="min-width: 100px">';
				$encendido = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="#ffffff" d="M232 128A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104"/></svg>';
				$apagado = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="#ffffff" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84"/></svg>';
				$status .= '
				<form action="' . $ruta . '" method="post">
					<input type="hidden" name="_token" value="' . csrf_token() . '" />
					<input type="hidden" name="_method" value="PUT">
					<input type="hidden" name="id" value="' . $item->id . '">
					<input type="hidden" name="status" value="1">
					<button type="submit" class="w-[22px] h-[22px] rounded bg-green-600 flex items-center justify-center mr-1">
						' . ($item->status == 1 ? $encendido : $apagado) . '
					</button>
				</form>
				<form action="' . $ruta . '" method="post">
					<input type="hidden" name="_token" value="' . csrf_token() . '" />
					<input type="hidden" name="_method" value="PUT">
					<input type="hidden" name="id" value="' . $item->id . '">
					<input type="hidden" name="status" value="2">
					<button class="w-[22px] h-[22px] rounded bg-yellow-600 flex items-center justify-center mr-1" onclick="cambiar_status_lotificacion(2)">
					' . ($item->status == 2 ? $encendido : $apagado) . '
					</button>
				</form>
				<form action="' . $ruta . '" method="post">
					<input type="hidden" name="_token" value="' . csrf_token() . '" />
					<input type="hidden" name="_method" value="PUT">
					<input type="hidden" name="id" value="' . $item->id . '">
					<input type="hidden" name="status" value="3">
					<button class="w-[22px] h-[22px] rounded bg-red-700 flex items-center justify-center" onclick="cambiar_status_lotificacion(3)">
					' . ($item->status == 3 ? $encendido : $apagado) . '
					</button>
				</form>
				';

				$status .= '</div>';

				return $status;
			})
			->rawColumns(['acciones', 'status']);
	}

	/**
	 * Get the query source of dataTable.
	 */
	public function query(Lotificacion $model): QueryBuilder
	{
		return $model->newQuery();
	}

	/**
	 * Optional method if you want to use the html builder.
	 */
	public function html(): HtmlBuilder
	{
		return $this->builder()
			->setTableId('lotificacion-table')
			->columns($this->getColumns())
			->minifiedAjax()
			->parameters([
				'info' => true,
				"lengthMenu" => [25, 50, 75, 100],
				'language' => [
					'url' => url('/plugins/es-ES.json')
				],
			])
			->orderBy(0, 'asc')
			->addScript('panel.lotificacion.script')
			->selectStyleSingle()
			->buttons([
				// Button::make('excel'),
				// Button::make('csv'),
				// Button::make('pdf'),
				// Button::make('print'),
				// Button::make('reset'),
				// Button::make('reload')
			]);
	}

	/**
	 * Get the dataTable columns definition.
	 */
	public function getColumns(): array
	{
		return [
			Column::make('id'),
			Column::make('lote')->searchable(true)->title('# Lote'),
			Column::computed('acciones')->title('Acciones')
				->exportable(false)
				->printable(false)
				->width(120)
				->addClass('text-center'),
			Column::computed('status')->title('Estado')
				->exportable(false)
				->printable(false)
				->width(120)
				->addClass('text-center')
		];
	}

	/**
	 * Get the filename for export.
	 */
	protected function filename(): string
	{
		return 'Lotificacion_' . date('YmdHis');
	}
}
