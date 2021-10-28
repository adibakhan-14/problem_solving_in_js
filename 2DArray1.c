int main()
{
int A[100][100], i, j, rows, columns, sum;
printf("Number of rows: ");
scanf("%d",&rows);
printf("Number of columns: ");
scanf("%d",&columns);
//int A[rows][columns];
for(i=0;i<rows;i++)
{
for(j=0;j<columns;j++)
{
printf("A[%d][%d]: ",i, j);
scanf("%d",&A[i][j]);
}
}
printf("Addition of rows:\n");

for(i=0;i<rows;i++)
{
    sum=0;
for(j=0;j<columns;j++)
{
//printf("%10d ",A[i][j]);
sum=sum+A[i][j];
}
printf("%d",sum);
printf("\n");
}
return 0;
}

