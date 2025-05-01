"use client"

import { useState, FormEvent, ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Loader2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AddVehiclePage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    licensePlate: "",
    imei: "",
    description: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Reset verification status when IMEI changes
    if (name === "imei") {
      setIsVerified(false)
      setError("")
    }
  }

  const verifyIMEI = async () => {
    if (!formData.imei || formData.imei.length !== 15) {
      setError("IMEI must be 15 digits")
      return
    }

    setIsVerifying(true)
    setError("")

    // Simulate API call to verify IMEI
    setTimeout(() => {
      setIsVerifying(false)
      setIsVerified(true)
    }, 1500)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isVerified) {
      setError("Please verify the IMEI first")
      return
    }

    setIsLoading(true)

    // Simulate API call to add vehicle
    setTimeout(() => {
      setIsLoading(false)
      navigate("/dashboard/vehicles")
    }, 1500)
  }

  return (
    <div className="flex flex-col gap-6 p-4 md:p-8">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Add New Vehicle</h1>
          <p className="text-muted-foreground">Register a new vehicle to your fleet</p>
        </div>
      </div>

      <Card className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Vehicle Details</CardTitle>
            <CardDescription>Enter the vehicle information and IMEI number</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="make">Make</Label>
                <Input
                  id="make"
                  name="make"
                  value={formData.make}
                  onChange={handleChange}
                  placeholder="Toyota"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="model">Model</Label>
                <Input
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  placeholder="Corolla"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="licensePlate">License Plate</Label>
              <Input
                id="licensePlate"
                name="licensePlate"
                value={formData.licensePlate}
                onChange={handleChange}
                placeholder="XYZ-123"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="imei">IMEI Number</Label>
              <div className="flex gap-2">
                <Input
                  id="imei"
                  name="imei"
                  value={formData.imei}
                  onChange={handleChange}
                  placeholder="123456789012345"
                  required
                />
                <Button type="button" variant="outline" onClick={verifyIMEI} disabled={isVerifying || isVerified}>
                  {isVerifying ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Verifying
                    </>
                  ) : isVerified ? (
                    "Verified"
                  ) : (
                    "Verify IMEI"
                  )}
                </Button>
              </div>
              {isVerified && <p className="text-sm text-green-600">IMEI verified successfully</p>}
              {error && <p className="text-sm text-red-600">{error}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description (Optional)</Label>
              <Input
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Company car for sales team"
              />
            </div>

            {isVerified && (
              <Alert className="bg-green-50 border-green-200">
                <AlertTitle>Device Information</AlertTitle>
                <AlertDescription>
                  <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                    <div>
                      <span className="font-medium">Device Type:</span> GPS Tracker
                    </div>
                    <div>
                      <span className="font-medium">Model:</span> GT06N
                    </div>
                    <div>
                      <span className="font-medium">Manufacturer:</span> Concox
                    </div>
                    <div>
                      <span className="font-medium">Status:</span> Active
                    </div>
                  </div>
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button" onClick={() => navigate(-1)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading || !isVerified}>
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Adding Vehicle
                </>
              ) : (
                "Add Vehicle"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
