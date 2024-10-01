'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod"
import { useUserStore } from '@/store/useUserStore'
import { useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { ArrowRightIcon, DollarSignIcon, PercentIcon } from 'lucide-react'

const userSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  income: z.coerce.number().min(0, { message: "Income must be a positive number." }),
  period: z.string().min(1, { message: "Period is required." }),
  limit: z.coerce.number().min(0).max(99, { message: "Limit must be between 0 and 99%." }),
})

type UserSchemaType = z.infer<typeof userSchema>

export default function SetupPage() {
  const setUserData = useUserStore((state) => state.setUserData)
  const navigate = useNavigate()

  const form = useForm<UserSchemaType>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      income: 0,
      period: "",
      limit: 0,
    },
  })

  const onSubmit = (data: UserSchemaType) => {
    setUserData(data.name, data.income, data.period, data.limit)
    navigate('/expenses/home')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 animate-gradient-x p-4 sm:p-6 md:p-8">
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
      <div className="relative w-full max-w-md">
        <div className="absolute inset-0 bg-white/50 rounded-lg backdrop-blur-md"></div>
        <Card className="relative bg-white/80 backdrop-blur-lg shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold text-center text-gray-800">¡A ahorrar!</CardTitle>
            <CardDescription className="text-center text-gray-600">Introduce tus datos para inicializar tu control financiero.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Ingresa tu nombre a mostrar..." {...field} className="bg-white/50 backdrop-blur-sm" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="income"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Income</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <DollarSignIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" size={18} />
                          <Input type="number" step="0.01" placeholder="0.00" {...field} className="pl-10 bg-white/50 backdrop-blur-sm" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="period"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Period</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white/50 backdrop-blur-sm">
                            <SelectValue placeholder="Select a period" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="biweekly">Bi-weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="limit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Spending Limit (%)</FormLabel>
                      <FormControl>
                        <div className="space-y-2">
                          <Slider
                            min={0}
                            max={99}
                            step={1}
                            value={[field.value]}
                            onValueChange={(value) => field.onChange(value[0])}
                          />
                          <div className="flex items-center justify-between">
                            <PercentIcon className="text-gray-600" size={18} />
                            <span className="text-sm text-gray-600">{field.value}%</span>
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
                  Complete Setup
                  <ArrowRightIcon className="ml-2" size={16} />
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}