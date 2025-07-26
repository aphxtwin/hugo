"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import PricingPage from "@/components/pricing-plant"
import {
  MessageCircle,
  Zap,
  Clock,
  TrendingUp,
  Users,
  CheckCircle,
  Smartphone,
  Bot,
  Edit3,
  ArrowDown,
  Check,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Hook personalizado para detectar cuando un elemento está en viewport
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return [ref, isInView] as const
}


export default function HugoPitchLanding() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  const [solutionRef, solutionInView] = useInView(0.3)
  const [featuresRef, featuresInView] = useInView(0.2)
  const [resultsRef, resultsInView] = useInView(0.3)

  const getFeatureColors = (color: string) => {
    const colors = {
      blue: "bg-gradient-to-br from-blue-900/50 to-blue-800/40 border-blue-500",
      green: "bg-gradient-to-br from-green-900/50 to-green-800/40 border-green-500",
      purple: "bg-gradient-to-br from-purple-900/50 to-purple-800/40 border-purple-500",
      hugo: "bg-gradient-to-br from-orange-600/50 to-orange-500/40 border-orange-500",
    }
    return colors[color as keyof typeof colors]
  }

  const getIconColor = (color: string) => {
    const colors = {
      blue: "text-blue-300",
      green: "text-green-300",
      purple: "text-purple-300",
      hugo: "text-orange-300",
    }
    return colors[color as keyof typeof colors]
  }

  const ProblemCard = ({
    icon: Icon,
    number,
    text,
    delay,
    color,
  }: {
    icon: any
    number: string
    text: string
    delay: string
    color: "red" | "yellow"
  }) => {
    const [ref, isInView] = useInView(0.3)

    const colorClasses = {
      red: {
        bg: "bg-white",
        icon: "text-[#0033A0]",
        number: "text-[#0033A0]",
      },
      yellow: {
        bg: "bg-white",
        icon: "text-yellow-500",
        number: "text-yellow-500",
      },
    }

    return (
      <div ref={ref}>
        <Card
          className={`${colorClasses[color].bg} p-8 text-center rounded-[12px] shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 transform-gpu ${
            isInView ? "animate-slide-up opacity-100" : "opacity-0 translate-y-8"
          }`}
          style={{ animationDelay: delay }}
        >
          <div className="relative">
            <Icon className={`w-16 h-16 mx-auto mb-4 ${colorClasses[color].icon} ${isInView ? "animate-float" : ""}`} />
            {isInView && <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full animate-ping" />}
          </div>
          <div className={`text-4xl font-black ${colorClasses[color].number} mb-2 drop-shadow-lg ${isInView ? "animate-counter" : ""}`}>
            {number}
          </div>
          <p className="text-lg text-gray-800 font-semibold">{text}</p>
        </Card>
      </div>
    )
  }

  return (
    <div className="">
      {/* Section 1: Main Hero */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-8 bg-white">
        <div className="text-center max-w-4xl">
          <div className="mb-12">
            <img
              src="/images/hugo-logo-azul.svg"
              alt="HUGO"
              className="mx-auto mb-8 max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* Fixed Navigation */}
      <nav className="fixed top-4 right-4 z-50 flex text-white flex-col gap-2  backdrop-blur-sm p-3 rounded-[12px] shadow-lg">
        <Button
          onClick={() => scrollToSection("hero")}
          size="sm"
          className="bg-[#0033A0]/80 hover:bg-[#0033A0] backdrop-blur-sm rounded-[12px]"
        >
          Inicio
        </Button>
        <Button
          onClick={() => scrollToSection("problem")}
          size="sm"
          className="bg-[#0033A0]/80 hover:bg-[#0033A0] backdrop-blur-sm rounded-[12px]"
        >
          Problema
        </Button>
        <Button
          onClick={() => scrollToSection("problema-actual")}
          size="sm"
          className="bg-[#0033A0]/80 hover:bg-[#0033A0] backdrop-blur-sm rounded-[12px]"
        >
          Problema Actual
        </Button>
        <Button
          onClick={() => scrollToSection("solution")}
          size="sm"
          className="bg-[#0033A0]/80 hover:bg-[#0033A0] backdrop-blur-sm rounded-[12px]"
        >
          Solución
        </Button>
        <Button
          onClick={() => scrollToSection("features")}
          size="sm"
          className="bg-[#0033A0]/80 hover:bg-[#0033A0] backdrop-blur-sm rounded-[12px]"
        >
          Features
        </Button>
        <Button
          onClick={() => scrollToSection("results")}
          size="sm"
          className="bg-[#0033A0]/80 hover:bg-[#0033A0] backdrop-blur-sm rounded-[12px]"
        >
          Resultados
        </Button>
        <Button
          onClick={() => scrollToSection("demo")}
          size="sm"
          className="bg-[#0033A0]/80 hover:bg-[#0033A0] backdrop-blur-sm rounded-[12px]"
        >
          Demo
        </Button>
      </nav>
      
      {/* Section 1: Hook */}
      <section id="hook" className="min-h-screen flex items-center justify-center px-8 bg-[#0033A0]">
        <div className="text-center max-w-4xl">
          <div className="mb-8">
            <MessageCircle className="w-20 h-20 mx-auto mb-4 animate-pulse text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white ">
            Cada semana, millones de mensajes de clientes se pierden
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            ¿Quién cuida realmente a tus clientes cuando no estás?
          </p>
          <Button
            onClick={() => scrollToSection("problema-actual")}
            className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black transition-all rounded-[12px]"
          >
            <ArrowDown className="w-4 h-4 mr-2" />
            Descubre el problema
          </Button>
        </div>
      </section>
      <section id="problema-actual" className="min-h-screen flex items-center justify-center px-8 bg-white">
        <div className="text-center max-w-4xl">

          <h1 id="problema-actual" className="text-2xl md:text-6xl font-bold mb-8 leading-tight  text-black ">
          Las herramientas de Customer Success prometen resultados increíbles. 
          </h1>
          {/* <p className="text-xl md:text-2xl text-gray-300 mb-12">
          Pero para un emprendedor no técnico, implementarlas es un infierno. Lo que empieza como un onboarding simple, termina siendo un callejón sin salida.
          </p> */}
        </div>
      </section>
      
      {/* Section: Gap Explanation */}
      <section className="min-h-screen flex items-center justify-center px-8 bg-[#0033A0]">
        <div className="text-center max-w-5xl">
          <div className="mb-12">
            <img
              src="/images/hugo-logo.svg"
              alt="HUGO"
              className="mx-auto mb-12 max-w-sm"
            />
          </div>
          
          <h2 className="text-[32px] font-bold mb-12 leading-tight text-white">
            Existe un gap enorme entre el onboarding inicial y la<br/>
            implementación real de herramientas de Customer Success.
          </h2>
          
          <p className="text-[28px] font-normal text-white leading-relaxed">
            👉 Esto deja a miles de negocios sin una solución efectiva para<br/>
            cuidar a sus clientes.
          </p>
        </div>
      </section>
      
      {/* Section 2: Problem */}
      <section id="problem" className="min-h-screen bg-[#DBDCDC]   flex items-center justify-center px-8 py-20 text-black">
        <div className="max-w-6xl w-full text-[#0033A0]">
                      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">Metricas de Customer Success</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <ProblemCard
              icon={TrendingUp}
              number="56%"
              text="de los clientes se van tras una mala experiencia"
              delay="0ms"
              color="red"
            />
            <ProblemCard
              icon={Clock}
              number="73%"
              text="espera una respuesta en menos de 5 minutos"
              delay="200ms"
              color="yellow"
            />
            <ProblemCard
              icon={Users}
              number="1"
              text="interacción mal gestionada = churn asegurado"
              delay="400ms"
              color="red"
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-gray-500 font-medium mb-8">
              Atención al cliente suele ser costosa, fragmentada y dependiente de humanos
            </p>
            <Button onClick={() => scrollToSection("solution")} className="bg-[#0033A0] hover:bg-[#0033A0]/90 rounded-[12px] text-white">
              <ArrowDown className="w-4 h-4 mr-2" />
              Ver la solución
            </Button>
          </div>
        </div>
      </section>
      <section id="solution" className="min-h-screen flex items-center justify-center px-8 bg-[#0033A0]">
        <div className="text-center max-w-[80%]">
          <div className="mb-8  ">
            <img
              src="/images/hugo-logo.svg"
              alt="HUGO"
              className="mx-auto mb-4 max-w-sm md:max-w-md"
            />
          </div>
          
          
          
          <p className="text-4xl font-semibold text-white leading-relaxed">
            "Una herramienta de Customer Success que no necesita implementación.<br/>
            Lo conectás en 2 minutos, y empieza a trabajar para vos"....
          </p>
        </div>
      </section>
              {/* Section 3: Solution */}
        <section id="solution" className="min-h-screen py-[4rem] flex items-center justify-center px-8 bg-white">
          <div className="max-w-7xl w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Features */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-[12px]">
                    <p className="text-lg text-gray-800">
                      "<strong>Aprende</strong> en tiempo real de cada conversación"
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-[12px]">
                    <p className="text-lg text-gray-800">
                      "Cada respuesta que da, deja <strong>trazabilidad</strong> (feedback implícito o explícito)"
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-[12px]">
                    <p className="text-lg text-gray-800">
                      "El dueño/cliente edita y afina su conocimiento directamente desde la <strong>memoria</strong>"
                    </p>
                  </div>
                </div>
              </div>

                            {/* Right side - Phone Image */}
              <div className="relative flex justify-center">
                <div className="relative">
                  <img
                    src="/images/03dee410-dedc-4a62-9c27-1afd9cb4ad5f.jpeg"
                    alt="Hugo WhatsApp Demo"
                    className="max-w-lg w-full h-auto rounded-[20px]"
                  />

      
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Section 4: Features */}
      <section id="features" className="min-h-screen flex items-center justify-center px-8 py-20 bg-[#0033A0] text-white">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">¿Cómo funciona HUGO?</h2>
          <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Zap,
                title: "Onboarding Instantáneo",
                desc: "Setup en minutos con interfaz ChatGPT",
                color: "blue",
                delay: "0ms",
              },
              {
                icon: Smartphone,
                title: "WhatsApp Integrado",
                desc: "Conexión directa con tu canal principal",
                color: "green",
                delay: "100ms",
              },
              {
                icon: Bot,
                title: "Respuestas Automáticas",
                desc: "IA que responde con datos actualizados",
                color: "purple",
                delay: "200ms",
              },
              {
                icon: Edit3,
                title: "Memoria Editable",
                desc: "Aprende y mejora con cada interacción",
                color: "hugo",
                delay: "300ms",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`p-6 text-center hover:scale-105 transition-all duration-500 rounded-[12px] ${
                  featuresInView ? "animate-slide-up opacity-100" : "opacity-0 translate-y-8"
                } ${getFeatureColors(feature.color)}`}
                style={{ animationDelay: feature.delay }}
              >
                <feature.icon
                  className={`w-12 h-12 mx-auto mb-4 ${getIconColor(feature.color)} ${
                    featuresInView ? "animate-bounce-slow" : ""
                  }`}
                />
                <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-sm text-gray-200">{feature.desc}</p>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <p className="text-xl text-gray-300 mb-8">Tu equipo no se satura, tus clientes no esperan</p>
            <Button onClick={() => scrollToSection("results")} className="bg-white text-[#0033A0] hover:bg-[#0033A0] hover:text-white rounded-[12px]">
              <ArrowDown className="w-4 h-4 mr-2" />
              Ver resultados
            </Button>
          </div>
        </div>
      </section>
                    {/* Section: Evals is our Moat */}
        <section className="min-h-screen flex items-center justify-center px-8 py-20 bg-[#0033A0] relative">
          {/* Hugo Logo in top right */}
          <div className="absolute top-8 right-8">
            <img
              src="/images/hugo-logo.svg"
              alt="HUGO"
              className="w-16 h-16"
            />
          </div>

          <div className="max-w-6xl w-full text-center">
            {/* Header */}
            <h2 className="text-[32px] font-bold text-white mb-12">
              "Evals is our Moat"
            </h2>

            {/* Bullet Points */}
            <div className="mb-16 space-y-4">
              <p className="text-xl text-white">
                • Cada conversación es una oportunidad de aprender.
              </p>
              <p className="text-xl text-white">
                • Cada corrección mejora a todos los HUGOs.
              </p>
            </div>

            {/* Terminal/Process Window */}
            <div className="bg-gray-900 rounded-[12px] p-8 mb-16 max-w-4xl mx-auto">
              <div className="space-y-4 text-left">
                <div className="flex items-center text-white">
                  <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs mr-4">1</span>
                  <span>El cliente hace una pregunta</span>
                </div>
                <div className="flex items-center text-white">
                  <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs mr-4">2</span>
                  <span>HUGO responde</span>
                </div>
                <div className="flex items-center text-white">
                  <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs mr-4">3</span>
                  <span>Si no tiene info, consulta al dueño</span>
                </div>
                <div className="flex items-center text-white">
                  <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs mr-4">4</span>
                  <span>El dueño corrige / enseña</span>
                </div>
                <div className="flex items-center text-white">
                  <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs mr-4">5</span>
                  <span>HUGO memoriza y mejora</span>
                </div>
                <div className="flex items-center text-white">
                  <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs mr-4">6</span>
                  <span>Ese conocimiento se vuelve parte del sistema</span>
                </div>
              </div>
            </div>

            {/* Bottom Quote */}
            <p className="text-[28px] font-normal text-white leading-relaxed">
              "Cada empresa entrena a su HUGO.<br/>
              <strong>Nosotros entrenamos al ecosistema.</strong>"
            </p>
          </div>
        </section>
      {/* Section 5: Results */}
      <section id="results" className="min-h-screen flex items-center justify-center px-8 py-20 bg-white">
        <div className="max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Resultados Comprobados</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-teal-50 rounded-[12px] p-8 border text-teal-900 border-teal-500 hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl font-bold text-teal-900  mb-2">+47%</div>
              <p className="text-xl">en engagement</p>
            </div>
            <div className="bg-blue-50 rounded-[12px] p-8 border text-blue-900 border-blue-500 hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl font-bold text-blue-900 mb-2">-30%</div>
              <p className="text-xl">en tiempo de respuesta</p>
            </div>
            <div className="bg-gray-50 rounded-[12px] p-8 border text-gray-900 border-gray-500 hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">0</div>
              <p className="text-xl">tickets sin responder</p>
            </div>
          </div>
          
        </div>
              </section>



       <section id="pricing" className="min-h-screen flex items-center justify-center px-8 py-20 bg-white">
         <PricingPage /> 
       </section>
      {/* Section 6: Demo CTA */}
      <section id="demo" className="min-h-screen flex items-center justify-center px-8 py-20 bg-black">
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Nuestra Visión</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Que cada empresa pueda brindar atención de primera
            <br />
            <span className="text-[#0033A0] font-semibold">sin depender de grandes equipos</span>
            <br />
            Con HUGO, cada cliente se siente escuchado
          </p>

          <div className="mb-8">
            <p className="text-xl mb-6">¿Querés conocerlo en acción?</p>
            <Button
              size="lg"
              className="bg-[#0033A0] hover:bg-[#0033A0]/90 text-white px-12 py-4 text-xl font-bold rounded-[12px] animate-pulse"
            >
              🚀 Ver Demo en Vivo
            </Button>
          </div>

          <div className="text-sm text-gray-500 mt-8">60 segundos de demo → Producto real funcionando</div>

          {/* Contact Info */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-gray-400 mb-4">¿Listo para revolucionar tu customer success?</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <Button
                variant="outline"
                className="border-[#0033A0] text-[#0033A0] hover:bg-[#0033A0] hover:text-white bg-transparent rounded-[12px]"
              >
                📧 Contactanos
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent rounded-[12px]"
              >
                📅 Agendar reunión
              </Button>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}
