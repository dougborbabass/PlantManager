import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';

export interface PlantProps {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
        times: number;
        repeat_every: string;
    },
    dateTimeNotification: Date;
}

interface StoredPlantProps {
    [id: string]: {data : PlantProps}
}

export async function savePlant(plant:PlantProps): Promise<void> {
    try {
        const data = await AsyncStorage.getItem('@plantmanager:plants');
        const oldPlants = data ? (JSON.parse(data) as StoredPlantProps) : {};

        const newPlant = {[plant.id]: {data:plant}}

        await AsyncStorage.setItem('@plantmanager:plants', JSON.stringify({
            ...newPlant, ...oldPlants
        }))

    }catch (erro) {
        throw new Error(erro);
    }
}

export async function loadPlant(): Promise<StoredPlantProps> {
    try {
        const data = await AsyncStorage.getItem('@plantmanager:plants');
        const Plants = data ? (JSON.parse(data) as StoredPlantProps) : {};
        return Plants;

    }catch (erro) {
        throw new Error(erro);
        
    }
}