import react from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

function InicioScreen(){
    return null;
}

function ClientesScreen(){
    return null;
}
function TurnosScreen(){
    return null;
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Inicio">
                <Drawer.Screen name="Inicio" component={InicioScreen}/>
                <Drawer.Screen name="Clientes" component={ClientesScreen}/>
                <Drawer.Screen name="Turnos" component={TurnosScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}