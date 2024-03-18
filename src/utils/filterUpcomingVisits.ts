export const filterUpcomingVisits = (visits: any) => {
    if (!visits || !Array.isArray(visits.records)) {
      return [];
    }

    const now = new Date();
    return visits.records.filter((visit: any) => {
      const visitDate = new Date(`${visit.start_date}T${visit.start_time}`);
      return visitDate > now;
    });
  };