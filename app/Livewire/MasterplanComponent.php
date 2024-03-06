<?php

namespace App\Livewire;

use App\Models\Lotificacion;
use Livewire\Component;

class MasterplanComponent extends Component
{
	public $data = [];

	public function mount()
	{
		$this->data = Lotificacion::all();
	}

	public function render()
	{
		return view('livewire.masterplan-component');
	}
}
