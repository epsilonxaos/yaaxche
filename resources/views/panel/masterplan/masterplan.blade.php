@extends('layouts.admin')

@section('content')
    <div class="relative overflow-x-auto">
        <p class="pb-2 text-sm font-semibold">
            Leyenda
        </p>
        <div class="flex flex-row gap-2 pb-4 bg-white dark:bg-gray-900 mb-3">

            {{-- @can(PermissionKey::Socios['permissions']['create']['name'])
            @endcan --}}
            <div class="flex items-center justify-start mb-1">
                <button class="w-[22px] h-[22px] rounded bg-green-600 flex items-center justify-center mr-1">

                </button>
                <p class="font-medium text-xs">Disponible</p>
            </div>
            <div class="flex items-center justify-start mb-1">
                <button class="w-[22px] h-[22px] rounded bg-yellow-600 flex items-center justify-center mr-1">

                </button>
                <p class="font-medium text-xs">Apartado</p>
            </div>
            <div class="flex items-center justify-start mb-1">
                <button class="w-[22px] h-[22px] rounded bg-red-700 flex items-center justify-center mr-1">

                </button>
                <p class="font-medium text-xs">Vendido</p>
            </div>
        </div>
    </div>

    @livewire('modal-masterplan')
    @livewire('masterplan-table')
@endsection
