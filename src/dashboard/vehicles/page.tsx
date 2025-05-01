import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Label } from "@/components/ui/label"

export default function VehiclesPage() {
    return (
        <div className="flex flex-col gap-6 p-4 md:p-8">
     <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Vehicles</h1>
          <p className="text-muted-foreground">Manage your vehicle fleet</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-1">
              <Plus className="h-4 w-4" />
              Add Vehicle
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Vehicle</DialogTitle>
              <DialogDescription>
                Enter the vehicle details and IMEI number to add a new vehicle to your fleet.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="make">Marke</Label>
                  <Input id="make" placeholder="Toyota" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="model">Model</Label>
                  <Input id="model" placeholder="Corolla" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="plate">License Plate</Label>
                <Input id="plate" placeholder="XYZ-123" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="imei">IMEI Number</Label>
                <Input id="imei" placeholder="123456789012345" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Input id="description" placeholder="Company car for sales team" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Add Vehicle</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

        </div>
    )
}