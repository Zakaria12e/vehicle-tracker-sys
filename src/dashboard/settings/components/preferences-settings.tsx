import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TabsContent } from "@/components/ui/tabs"

export function PreferencesSettings() {
  return (
    <TabsContent value="preferences" className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Regional Settings</CardTitle>
          <CardDescription>Configure your regional preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="language">Language</Label>
            <Select defaultValue="en">
              <SelectTrigger id="language">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="de">German</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="timezone">Timezone</Label>
            <Select defaultValue="utc-8">
              <SelectTrigger id="timezone">
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
                <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
                <SelectItem value="utc+0">UTC</SelectItem>
                <SelectItem value="utc+1">Central European Time (UTC+1)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="units">Distance Units</Label>
            <Select defaultValue="km">
              <SelectTrigger id="units">
                <SelectValue placeholder="Select units" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="km">Kilometers (km)</SelectItem>
                <SelectItem value="mi">Miles (mi)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Preferences</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  )
}
