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
        <div class="hidden text-blue-600 dark:text-blue-500" data-modal-target="default-modal"></div>
        <div class="hidden text-green-600 bg-yellow-600 dark:text-emerald-500"></div>
        <div class="hidden text-yellow-600 bg-green-600 dark:text-emerald-500"></div>
        <div class="hidden text-red-600 bg-red-700 dark:text-pink-500"></div>



        {{ $dataTable->table() }}


        <!-- Main modal -->
        <div id="default-modal" tabindex="-1" aria-hidden="true"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-2xl max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Editar lote #<span id="idLote"></span>
                        </h3>
                        <button type="button" onclick="closeModal()"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="default-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-4 md:p-5 space-y-4">
                        <form action="{{ route('panel.lotificacion.update') }}" method="post" id="formUpdate">
                            @csrf
                            @method('PUT')
                            <input type="hidden" name="id" id="id" value="0">
                            <div class="mb-5">
                                <label for="precio"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio
                                    contado</label>
                                <input type="text" id="precio" name="precio"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </div>
                            <div class="mb-5">
                                <label for="precio12"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio 12
                                    meses</label>
                                <input type="text" id="precio12" name="precio12"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </div>
                            <div class="mb-5">
                                <label for="precio18"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio 18
                                    meses</label>
                                <input type="text" id="precio18" name="precio18"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </div>
                        </form>
                    </div>
                    <!-- Modal footer -->
                    <div
                        class="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="default-modal" type="submit" onclick="onSubmit()"
                            class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                            Actualizar</button>
                        <button data-modal-hide="default-modal" type="button" onclick="closeModal()"
                            class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('script')
    {{ $dataTable->scripts(attributes: ['type' => 'module']) }}
    <script src="https://unpkg.com/imask"></script>

    <script>
        var _data = {!! json_encode($data) !!};
        const $targetEl = document.getElementById('default-modal');
        var options = {
            placement: 'bottom-right',
            backdrop: 'static',
            backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
            closable: true,
        };
        const instanceOptions = {
            id: 'default-modal',
            override: true
        };

        var modal = new Modal($targetEl, options, instanceOptions);

        const optionsMask = {
            mask: Number,
            scale: 2,
            thousandsSeparator: ',',
            radix: '.',
            mapToRadix: ['.'],
        }

        const precio = IMask(document.getElementById('precio'), optionsMask)
        const precio12 = IMask(document.getElementById('precio12'), optionsMask)
        const precio18 = IMask(document.getElementById('precio18'), optionsMask)
        // modal.show();

        function openModal(id) {
            const data = _data.find(d => d.id === id)


            // precio.updateValue(data.precio);
            document.getElementById('idLote').innerHtml = data.lote
            document.getElementById('id').value = data.id
            precio.unmaskedValue = data.precio.toString();
            precio12.unmaskedValue = data.precio12.toString();
            precio18.unmaskedValue = data.precio18.toString();

            modal.show();
        }

        function onSubmit() {
            document.getElementById('formUpdate').submit()
        }

        function closeModal() {
            modal.hide();

            let p18 = document.getElementById('precio18')
            var numero = parseFloat(p18.value.replace(/,/g, ''));
            console.log(numero);
        }
    </script>
@endpush
