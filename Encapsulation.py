# Parent Class
class Device:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
    
    def device_info(self):
        return f"{self.brand} {self.model}"

# Child Class with Encapsulation
class Smartphone(Device):
    def __init__(self, brand, model, battery_level):
        super().__init__(brand, model)
        self.__battery_level = battery_level   # private attribute

    # Getter
    def get_battery_level(self):
        return f"Battery: {self.__battery_level}%"

    # Setter
    def charge_battery(self, amount):
        self.__battery_level = min(100, self.__battery_level + amount)
        return f"Battery charged to {self.__battery_level}%"

    def use_phone(self, hours):
        self.__battery_level = max(0, self.__battery_level - hours * 10)
        return f"Used for {hours}h, battery now {self.__battery_level}%"

# Example usage
phone = Smartphone("Samsung", "Galaxy S24", 70)
print(phone.device_info())
print(phone.get_battery_level())
print(phone.use_phone(3))
print(phone.charge_battery(25))
