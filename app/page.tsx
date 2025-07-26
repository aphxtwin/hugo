"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
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
      blue: "bg-gradient-to-br from-blue-900/30 to-blue-800/30 border-blue-500",
      green: "bg-gradient-to-br from-green-900/30 to-green-800/30 border-green-500",
      purple: "bg-gradient-to-br from-purple-900/30 to-purple-800/30 border-purple-500",
      hugo: "bg-gradient-to-br from-[#0033A0]/30 to-[#0033A0]/20 border-[#0033A0]",
    }
    return colors[color as keyof typeof colors]
  }

  const getIconColor = (color: string) => {
    const colors = {
      blue: "text-blue-400",
      green: "text-green-400",
      purple: "text-purple-400",
      hugo: "text-orange-400",
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
        bg: "bg-gradient-to-br from-[#0033A0]/80 to-[#0033A0]/60 border-[#0033A0]",
        icon: "text-white",
        number: "text-white",
      },
      yellow: {
        bg: "bg-gradient-to-br from-yellow-600/60 to-yellow-500/40 border-yellow-500",
        icon: "text-white",
        number: "text-white",
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
            <Icon className={`w-16 h-16 mx-auto mb-4 ${colorClasses[color].icon} drop-shadow-lg ${isInView ? "animate-float" : ""}`} />
            {isInView && <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full animate-ping" />}
          </div>
          <div className={`text-4xl font-black ${colorClasses[color].number} mb-2 drop-shadow-lg ${isInView ? "animate-counter" : ""}`}>
            {number}
          </div>
          <p className="text-lg text-white font-semibold drop-shadow-lg">{text}</p>
        </Card>
      </div>
    )
  }

  return (
    <div className="">
      {/* Fixed Navigation */}
      <nav className="fixed top-4 right-4 z-50 flex text-white flex-col gap-2  backdrop-blur-sm p-3 rounded-[12px] shadow-lg">
        <Button
          onClick={() => scrollToSection("hook")}
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
            onClick={() => scrollToSection("problem")}
            className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black transition-all rounded-[12px]"
          >
            <ArrowDown className="w-4 h-4 mr-2" />
            Descubre el problema
          </Button>
        </div>
      </section>
      <section id="problema-actual" className="min-h-screen flex items-center justify-center px-8 bg-[#0033A0]">
        <div className="text-center max-w-4xl">

          <h1 className="text-2xl md:text-6xl font-bold mb-8 leading-tight text-white ">
          Las herramientas de Customer Success prometen resultados increíbles. 
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
          Pero para un emprendedor no técnico, implementarlas es un infierno. Lo que empieza como un onboarding simple, termina siendo un callejón sin salida.
          </p>
        </div>
      </section>
      {/* Section 2: Problem */}
      <section id="problem" className="min-h-screen flex items-center justify-center px-8 py-20 bg-white text-black">
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
            <p className="text-xl text-black font-semibold mb-8">
              Atención al cliente suele ser costosa, fragmentada y dependiente de humanos
            </p>
            <Button onClick={() => scrollToSection("solution")} className="bg-[#0033A0] hover:bg-[#0033A0]/90 rounded-[12px] text-white">
              <ArrowDown className="w-4 h-4 mr-2" />
              Ver la solución
            </Button>
          </div>
        </div>
      </section>

      {/* Section 3: Solution */}
      {/* <section id="solution" className="min-h-screen flex items-center justify-center px-8 py-20 bg-[#0033A0]">
        <div className="max-w-5xl text-center">
          <div className="mb-12">
            <div ref={solutionRef}>
              <img
                src="/images/go-logo.png"
                alt="GO - Customer Success Platform"
                className={`mx-auto mb-8 max-w-sm md:max-w-md transition-all duration-1000 ${
                  solutionInView ? "animate-scale-in opacity-100" : "opacity-0 scale-75"
                }`}
              />
            </div>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8">El agente de Customer Success que lo hace todo</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
            <div className="text-center">
              <Zap className="w-16 h-16 mx-auto text-orange-500 mb-2" />
              <p className="text-sm">Instalación en minutos</p>
            </div>
            <div className="text-4xl text-gray-500 hidden md:block">→</div>
            <div className="text-center">
              <MessageCircle className="w-16 h-16 mx-auto text-green-500 mb-2" />
              <p className="text-sm">Interfaz ChatGPT</p>
            </div>
            <div className="text-4xl text-gray-500 hidden md:block">→</div>
            <div className="text-center">
              <CheckCircle className="w-16 h-16 mx-auto text-blue-500 mb-2" />
              <p className="text-sm">Cuidado Total</p>
            </div>
          </div>

          <p className="text-xl text-gray-300 mb-8">
            Instalalo en minutos y empezá a cuidar a tus clientes desde el primer mensaje
          </p>

          <Button onClick={() => scrollToSection("features")} className="bg-[#0033A0] hover:bg-[#0033A0]/90 rounded-[12px]">
            <ArrowDown className="w-4 h-4 mr-2" />
            ¿Cómo funciona?
          </Button>
        </div>
      </section> */}
            <section id="solution" className="min-h-screen flex items-center justify-center px-8 bg-[#0033A0]">
        <div className="text-center max-w-5xl">
          <div className="mb-8  ">
            <img
              src="/images/hugo-logo.svg"
              alt="HUGO"
              className="mx-auto mb-4 max-w-sm md:max-w-md"
            />
          </div>
          
          <h1 className="text-4xl md:text-[32px] font-r mb-10 leading-tight text-white">
            Por eso creamos  
            <span className="font-black ml-2">HUGO</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
            "Una herramienta de Customer Success que no necesita implementación.<br/>
            Lo conectás en 2 minutos, y empieza a trabajar para vos"....
          </p>
        </div>
      </section>
      {/* Section 4: Features */}
      <section id="features" className="min-h-screen flex items-center justify-center px-8 py-20 bg-slate-800">
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
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.desc}</p>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <p className="text-xl text-gray-300 mb-8">Tu equipo no se satura, tus clientes no esperan</p>
            <Button onClick={() => scrollToSection("results")} className="bg-[#0033A0] hover:bg-[#0033A0]/90 rounded-[12px]">
              <ArrowDown className="w-4 h-4 mr-2" />
              Ver resultados
            </Button>
          </div>
        </div>
      </section>

      {/* Section 5: Results */}
      <section id="results" className="min-h-screen flex items-center justify-center px-8 py-20 bg-green-900">
        <div className="max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Resultados Comprobados</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-900/40 to-green-800/40 rounded-[12px] p-8 border border-green-500 hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl font-bold text-green-400 mb-2">+47%</div>
              <p className="text-xl">en engagement</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-[12px] p-8 border border-blue-500 hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-2">-30%</div>
              <p className="text-xl">en tiempo de respuesta</p>
            </div>
            <div className="bg-gradient-to-br from-[#0033A0]/40 to-[#0033A0]/30 rounded-[12px] p-8 border border-[#0033A0] hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl font-bold text-[#0033A0] mb-2">0</div>
              <p className="text-xl">tickets sin responder</p>
            </div>
          </div>
          <p className="text-lg text-gray-300 mb-8">*Resultados de pruebas iniciales con clientes beta</p>
          <Button onClick={() => scrollToSection("demo")} className="bg-[#0033A0] hover:bg-[#0033A0]/90 rounded-[12px]">
            <ArrowDown className="w-4 h-4 mr-2" />
            Ver demo
          </Button>
        </div>
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
