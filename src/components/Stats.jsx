import { AcademicCapIcon, UsersIcon, CodeBracketIcon, BugAntIcon } from '@heroicons/react/24/outline';

const stats = [
    { name: 'Attendees', value: '10000 +', icon: UsersIcon },
    { name: 'Apps created', value: '500 +', icon: CodeBracketIcon },
    { name: 'Mentors', value: '30 +', icon: AcademicCapIcon },
    { name: 'Bugs created', value: '5000 +', icon: BugAntIcon }
]

export default function Stats() {
    return (
        <div className="bg-tail pb-24">
            <div className="bg-fuchsia-500 max-w-7xl mx-auto border-fuchsia-500 border-2 rounded-xl overflow-hidden">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-px bg-fuchsia-500/5 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.name} className="bg-stone-50 px-8 py-10 flex justify-between items-center sm:px-6 lg:px-8">
                                <div>
                                    <p className="text-xl font-bold leading-6 text-tail">{stat.name}</p>
                                    <p className="mt-2 flex items-baseline gap-x-2">
                                        <span className="text-4xl font-semibold tracking-tight text-tail">{stat.value}</span>
                                        {stat.unit ? <span className="text-sm text-tail">{stat.unit}</span> : null}
                                    </p>
                                </div>
                                {<stat.icon className='h-16 w-16 text-tail' />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}