import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import MUIAccordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface AccordionProps {
  title: string;
  isExpandedByDefault?: boolean;
}

const Accordion: React.FC<React.PropsWithChildren<AccordionProps>> = ({
  children,
  title,
  isExpandedByDefault = false,
}) => {
  return (
    <MUIAccordion defaultExpanded={isExpandedByDefault}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="accordion-content"
      >
        <Typography fontWeight="500">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails id="accordion-content">{children}</AccordionDetails>
    </MUIAccordion>
  );
};

export default Accordion;
