"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from "lucide-react"
import Link from "next/link"
import { CONTACT } from "@/lib/constants"

const questions = [
  {
    id: 1,
    question: "¿Ambas partes están dispuestas a dialogar?",
    yesPoints: 2,
    noPoints: 0,
    explanation: "La disposición al diálogo es fundamental para el éxito de la mediación.",
  },
  {
    id: 2,
    question: "¿Existe violencia doméstica o abuso?",
    yesPoints: -3,
    noPoints: 2,
    explanation: "En casos de violencia, se requiere un enfoque legal diferente para garantizar la seguridad.",
  },
  {
    id: 3,
    question: "¿Desean mantener una relación cordial post-divorcio?",
    yesPoints: 2,
    noPoints: 0,
    explanation: "La mediación ayuda a preservar relaciones saludables, especialmente importante si hay hijos.",
  },
  {
    id: 4,
    question: "¿Tienen hijos menores de edad?",
    yesPoints: 2,
    noPoints: 1,
    explanation: "La mediación es especialmente beneficiosa para proteger el bienestar de los hijos.",
  },
  {
    id: 5,
    question: "¿Buscan una solución rápida y económica?",
    yesPoints: 2,
    noPoints: 0,
    explanation: "La mediación es significativamente más rápida y económica que el litigio tradicional.",
  },
]

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<boolean[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (answer: boolean) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const calculateScore = () => {
    return answers.reduce((total, answer, index) => {
      const question = questions[index]
      return total + (answer ? question.yesPoints : question.noPoints)
    }, 0)
  }

  const getRecommendation = (score: number) => {
    if (score >= 7) {
      return {
        title: "¡Excelente! La Mediación es Ideal para Ti",
        description:
          "Tu situación es perfecta para la mediación. Tienes todas las condiciones para un proceso exitoso, rápido y económico.",
        color: "text-green-600",
        bgColor: "bg-green-50",
        icon: CheckCircle2,
      }
    } else if (score >= 4) {
      return {
        title: "La Mediación Puede Funcionar para Ti",
        description:
          "Tu caso tiene buen potencial para mediación. Te recomendamos una consulta para evaluar las mejores estrategias.",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        icon: CheckCircle2,
      }
    } else {
      return {
        title: "Consulta Recomendada",
        description:
          "Tu situación requiere una evaluación más detallada. Agenda una consulta gratuita para explorar todas tus opciones legales.",
        color: "text-amber-600",
        bgColor: "bg-amber-50",
        icon: XCircle,
      }
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
  }

  if (showResults) {
    const score = calculateScore()
    const recommendation = getRecommendation(score)
    const Icon = recommendation.icon

    return (
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-center">Resultados de Tu Evaluación</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className={`${recommendation.bgColor} rounded-lg p-6 text-center`}>
            <Icon className={`w-16 h-16 ${recommendation.color} mx-auto mb-4`} />
            <h3 className={`text-2xl font-bold mb-2 ${recommendation.color}`}>{recommendation.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{recommendation.description}</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Tus Respuestas:</h4>
            {questions.map((question, index) => (
              <div key={question.id} className="flex items-start gap-3 text-sm">
                {answers[index] ? (
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="font-medium">{question.question}</p>
                  <p className="text-muted-foreground text-xs">{question.explanation}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button asChild className="flex-1">
              <Link href={CONTACT.whatsappLink} target="_blank">
                Consulta Gratis por WhatsApp
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" onClick={resetQuiz}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Reintentar
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <Card className="border-2">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary">
            Pregunta {currentQuestion + 1} de {questions.length}
          </Badge>
          <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div className="bg-primary h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <CardTitle className="text-xl text-balance leading-relaxed">{questions[currentQuestion].question}</CardTitle>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button size="lg" onClick={() => handleAnswer(true)} className="flex-1">
            Sí
          </Button>
          <Button size="lg" variant="outline" onClick={() => handleAnswer(false)} className="flex-1">
            No
          </Button>
        </div>
        <p className="text-sm text-muted-foreground text-center">{questions[currentQuestion].explanation}</p>
      </CardContent>
    </Card>
  )
}
