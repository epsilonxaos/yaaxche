<?php

namespace App\Livewire;

use App\Models\Lotificacion;
use Livewire\Attributes\On;
use Livewire\Component;

class ModalMasterplan extends Component
{

	public $data = null;
	public bool $open = false;

	public $vista = '';
	public $frente = '';
	public $fondo = '';
	public $m2 = '';
	public $precioTotal = 0;
	public $status = '';
	public $enganche = '';
	public $precio48 = 0;
	public $precio36 = 0;
	public $precio24 = 0;
	public $precio12 = 0;
	public $precio6 = 0;
	public $contado = 0;
	public $apartado = 0;
	public $manzana = 0;
	public $precio_m2 = 0;

	#[On('open-modal')]
	public function open($data)
	{
		$this->data = $data;

		$this->vista = $data['vista'];
		$this->frente = $data['frente'];
		$this->fondo = $data['fondo'];
		$this->m2 = $data['m2'];
		$this->precioTotal = $data['precio_total'];
		$this->status = $data['status'];
		$this->enganche = $data['enganche'];
		$this->precio48 = $data['precio_48'];
		$this->precio36 = $data['precio_36'];
		$this->precio24 = $data['precio_24'];
		$this->precio12 = $data['precio_12'];
		$this->precio6 = $data['precio_6'];
		$this->contado = $data['contado'];
		$this->apartado = $data['apartado'];
		$this->manzana = $data['manzana'];
		$this->precio_m2 = $data['precio_m2'];


		$this->open = true;
	}

	#[On('save-modal')]
	public function save()
	{
		$upd = Lotificacion::find($this->data['id']);
		$upd->vista = $this->vista;
		$upd->frente = $this->frente;
		$upd->fondo = $this->fondo;
		$upd->m2 = $this->m2;
		$upd->precio_total = $this->precioTotal;
		$upd->status = $this->status;
		$upd->enganche = $this->enganche;
		$upd->precio_48 = $this->precio48;
		$upd->precio_36 = $this->precio36;
		$upd->precio_24 = $this->precio24;
		$upd->precio_12 = $this->precio12;
		$upd->precio_6 = $this->precio6;
		$upd->contado = $this->contado;
		$upd->apartado = $this->apartado;
		$upd->manzana = $this->manzana;
		$upd->precio_m2 = $this->precio_m2;
		$upd->save();

		flash()->addSuccess('Datos actualizados');

		$this->reset();
		$this->dispatch('refreshDatatable');
	}

	#[On('close-modal')]
	public function close()
	{
		$this->reset();
	}

	public function updatedFrente()
	{
		$this->frente = floatval($this->frente);
	}
	public function updatedM2()
	{
		$this->m2 = floatval($this->m2);
	}

	public function render()
	{
		return view('livewire.modal-masterplan');
	}
}
