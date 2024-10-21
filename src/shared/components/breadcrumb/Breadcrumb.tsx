import { Breadcrumb as BreadcrumbAntd } from 'antd';
import { useNavigate } from 'react-router-dom';

export interface ListBreadCrumb {
  name: string;
  navigateTo?: string;
}

interface BreadCrumbProps {
  listCrumb: ListBreadCrumb[];
}

const BreadCrumb = ({ listCrumb }: BreadCrumbProps) => {
  const navigate = useNavigate();

  const goToClick = (navigateTo: string) => {
    navigate(navigateTo);
  };

  return (
    <BreadcrumbAntd
      items={listCrumb.map((item) => ({
        title: item.navigateTo ? (
          <a onClick={() => goToClick(item.navigateTo || '')}>{item.name}</a>
        ) : (
          item.name
        ),
      }))}
    ></BreadcrumbAntd>
  );
};

export default BreadCrumb;
