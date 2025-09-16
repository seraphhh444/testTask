import cls from '@/styles/LikesHeader.module.scss'

const LikesHeader = () => {
    return (
        <section className={cls.header}>
                <span>
                    Главная / Избранное
                </span>
            <div className={cls.header_lower}>
                <h1>
                    Избранное
                </h1>
            </div>
        </section>
    );
};

export default LikesHeader;