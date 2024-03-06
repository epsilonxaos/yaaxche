<?php

namespace App\Livewire;

use Livewire\Component;

class UpdateMasterplanStatus extends Component
{

	public $status = null;
	public $id = null;

	public function mount($id, $status)
	{
		$this->id = $id;
		$this->status = $status;
	}

	public function render()
	{
		return view('livewire.update-masterplan-status');
	}
}
