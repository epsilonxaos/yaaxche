export function formatearNumero(numero: number | string, decimales: number = 2, prefijo: string = "", subfijo: string = ""): string {
	// Convertir a número si es un string
	if (!numero) return "";
	const numeroComoNumero = typeof numero === "string" ? parseFloat(numero) : numero;

	// Verificar si el número es un NaN
	if (isNaN(numeroComoNumero)) {
		return "Formato no válido";
	}

	// Formatear el número con decimales
	const numeroFormateado = numeroComoNumero.toFixed(decimales);

	// Agregar separadores de miles
	const partes = numeroFormateado.split(".");
	partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	// Unir las partes y agregar prefijo y subfijo
	const resultado = prefijo + partes.join(".") + subfijo;

	return resultado;
}
