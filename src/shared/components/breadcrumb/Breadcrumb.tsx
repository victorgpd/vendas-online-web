import { Breadcrumb as BreadcrumbAntd } from "antd";
import { useNavigate } from "react-router-dom";

export interface ListBreadCrumb {
    name: string
    navigateTo?: string
}

interface BreadCrumbProps {
    listCrumb: ListBreadCrumb[]
}

const BreadCrumb = ({ listCrumb }: BreadCrumbProps) => {
    const navigate = useNavigate()

    const goToClick = (navigateTo: string) => {
        navigate(navigateTo)
    }

    return (
        <BreadcrumbAntd>
            { listCrumb.map((breadcrumb, index) => (
                <BreadcrumbAntd.Item key={`breaditem_${index}`}>
                    { breadcrumb.navigateTo ? (
                        <a onClick={() => goToClick(breadcrumb.navigateTo || '')}>{breadcrumb.name}</a>) : (breadcrumb.name)
                    }
                </BreadcrumbAntd.Item>
            ))}
        </BreadcrumbAntd>
    )
}

export default BreadCrumb