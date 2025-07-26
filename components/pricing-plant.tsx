"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfecto para comenzar con Hugo AI y explorar sus capacidades",
    price: 29,
    setupFee: 0,
    popular: false,
    features: [
      "Hasta 1,000 llamadas a Hugo por mes",
      "Memoria básica de tu negocio",
      "Soporte estándar por email",
      "Personalización básica de respuestas en tiempo real",
      "Dashboard de análisis básico",
      "Acceso a plantillas predefinidas",
      "Integración básica con herramientas",
    ],
  },
  {
    name: "Pro",
    description: "Para equipos que necesitan toda la potencia de Hugo AI",
    price: 99,
    setupFee: 0,
    popular: false,
    features: [
      "Llamadas ilimitadas a Hugo",
      "Memoria avanzada de tu negocio",
      "Soporte prioritario por chat, email y teléfono",
      "Personalización avanzada en tiempo real",
      "Dashboard de análisis completo",
      "Integraciones con CRM y herramientas empresariales",
      "API access completo",
      "Entrenamientos personalizados",
      "Respuestas más rápidas y precisas",
      "Configuraciones personalizadas por proyecto",
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Planes flexibles y funcionalidades. Precios honestos. <br /> Sin tarifas ocultas.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Hugo es una AI que te permite personalizar su respuesta en tiempo real
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all hover:shadow-xl border-gray-200 bg-white`}
            >
              <CardHeader className="pb-6">
                <div className="flex justify-between items-start mb-3">
                  <CardTitle className="text-3xl font-bold text-gray-900">{plan.name}</CardTitle>
                </div>
                <p className="text-gray-600 leading-relaxed">{plan.description}</p>
              </CardHeader>

              <CardContent>
                <div className="mb-8">
                  <div className="flex items-baseline mb-2">
                    <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600 ml-2 text-lg">/mes</span>
                  </div>
                  {plan.setupFee === 0 && (
                    <p className="text-sm text-green-600 font-medium">Sin tarifa de configuración</p>
                  )}
                </div>

                <Button className={`w-full mb-8 py-4 text-lg font-semibold bg-gray-900 hover:bg-gray-800 text-white`}>
                  Probar Hugo Ahora
                </Button>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-6 text-lg">Incluye</h4>
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Necesitas algo más específico?</h3>
            <p className="text-gray-600 mb-6">
              Si tienes necesidades empresariales especiales o requieres un volumen mayor de llamadas, contáctanos para
              crear un plan personalizado que se adapte perfectamente a tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="px-8 py-3 bg-transparent">
                Hablar con Ventas
              </Button>
              <Button variant="ghost" className="px-8 py-3">
                Ver Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Cancela cuando quieras</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>14 días de prueba gratis</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Soporte en español</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
