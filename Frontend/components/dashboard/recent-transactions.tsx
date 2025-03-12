import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentTransactions() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg" alt="Avatar" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Amazon.com</p>
          <p className="text-sm text-muted-foreground">Online Purchase</p>
        </div>
        <div className="ml-auto font-medium">-$45.50</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg" alt="Avatar" />
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Starbucks</p>
          <p className="text-sm text-muted-foreground">Coffee Shop</p>
        </div>
        <div className="ml-auto font-medium">-$5.20</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg" alt="Avatar" />
          <AvatarFallback>D</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Direct Deposit</p>
          <p className="text-sm text-muted-foreground">Payroll</p>
        </div>
        <div className="ml-auto font-medium text-green-500">+$1,200.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg" alt="Avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Uber</p>
          <p className="text-sm text-muted-foreground">Transportation</p>
        </div>
        <div className="ml-auto font-medium">-$12.75</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg" alt="Avatar" />
          <AvatarFallback>N</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Netflix</p>
          <p className="text-sm text-muted-foreground">Subscription</p>
        </div>
        <div className="ml-auto font-medium">-$15.99</div>
      </div>
    </div>
  )
}

