import Garage from '@/assets/Garage.svg'
import Likes from '@/assets/Heart.svg'
import Bin from '@/assets/Bin.svg'
import User from '@/assets/User.svg'


interface NavItem {
    title: string,
    imageSrc: string,
}

export const navbarModel: NavItem[] = [
    {
        title: 'Гараж',
        imageSrc: Garage
    },
    {
        title: 'Избранное',
        imageSrc: Likes
    },
    {
        title: 'Корзина',
        imageSrc: Bin
    },
    {
        title: 'Войти',
        imageSrc: User
    }
]